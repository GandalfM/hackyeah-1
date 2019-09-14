import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Overlay, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import useCurrentPosition from '../../hooks/useCurrentPosition';
import Marker from './marker';
import useListBins from "../../hooks/useListBins";
import {GarbageBin} from "../../client/src/models";

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});


export default function App() {
    const { loading, data: location } = useCurrentPosition();
    const { loading: loadingList, data: binList } = useListBins();


    if (loading) {
        return <Text>Loading </Text>;
    }

    const renderList = () => {
        if (loadingList) {
            return null;
        } else {
            return binList.map((bin: GarbageBin) => <Marker location={bin}/>)
        }
    };

    return (
        <View style={styles.container} >
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={location}
                showsUserLocation
            >
                {renderList()}
                {/*<Marker*/}
                {/*    location={location}*/}
                {/*// icon={{*/}
                {/*//     uri: 'https://icon-library.net/images/trash-can-icon-png/trash-can-icon-png-28.jpg',*/}
                {/*//     width: 5,*/}
                {/*//     height: 100*/}
                {/*// }}*/}
                {/*/>*/}
            </MapView>
        </View>
    );
}
