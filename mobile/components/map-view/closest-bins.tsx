import React from 'react';
import { Linking, ToastAndroid } from 'react-native';
import useListBins from '../../hooks/useListBins';
import { Text, List, ListItem, Body, Left, Button, Icon } from 'native-base';
import distance from '../../util/distance';
import useCurrentPosition from '../../hooks/useCurrentPosition';


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
    const getDistance = (d) => {
        if (d<200)
            return d.toFixed(0);
        if (d>200)
            return d.toFixed(0);
    };
    return (
        <List>
            <ListItem itemHeader first>
                <Text>Closest bins:</Text>
            </ListItem>
            {sorted.map((bin) =>
                <ListItem icon key={bin.id} onPress={() => goToBin(bin)}>
                    <Left>
                        <Icon active name="navigate" />
                    </Left>
                    <Body>
                        <Text>{getDistance(bin.distance)}m</Text>
                    </Body>
                </ListItem>)}
        </List>
    );
}

