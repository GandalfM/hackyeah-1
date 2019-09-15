import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Linking, ToastAndroid } from 'react-native';
import useListBins from '../../hooks/useListBins';
import { Text, List, ListItem, Content } from 'native-base';
import distance from '../../util/distance';
import useCurrentPosition from '../../hooks/useCurrentPosition';
import { GarbageBin } from '../../../backend/src/models';

const styles = StyleSheet.create({
    details: {
        flexDirection: 'column',
        flex: 1
    },
    list: {
        flex: 1,
        // width: '100%'
    }
});


export default function ClosestBins({ }: {}) {
    const { loading, data: location } = useCurrentPosition();
    const { loading: loadingList, data: binList } = useListBins();

    if (loading || loadingList) {
        return null;
    }

    const goToBin = (bin) => {
        console.log('About to navigate to', location);
        var url = `https://www.google.com/maps/dir/?api=1&travelmode=walking&dir_action=navigate&destination=${bin.latitude}, ${bin.longitude}`;
        ToastAndroid.show('Navigating to the selected bin', ToastAndroid.SHORT);

        Linking.canOpenURL(url).then(supported => {
            if (!supported) {
                console.log(`Can't handle url: ${url}`);
            } else {
                return Linking.openURL(url);
            }
        }).catch(err => console.error('An error occurred', err));
    }

    const sorted = binList.map((bin) => ({ ...bin, distance: distance(bin.latitude, bin.longitude, location.latitude, location.longitude) })).sort((a, b) => a.distance - b.distance);
    console.log(binList);
    return (
        <View style={styles.details} >
            <List style={styles.list}>
                <ListItem itemHeader first>
                    <Text>Closest bins:</Text>
                </ListItem>
                {sorted.map((bin) => <ListItem key={bin.id} style={{ flex: 1 }} onPress={() => goToBin(bin)}><Text>{bin.distance.toPrecision(2)}m</Text></ListItem>)}

            </List>
        </View>
    );
}

