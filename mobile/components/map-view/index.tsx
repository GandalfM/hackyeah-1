import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import useCurrentPosition from '../../hooks/useCurrentPosition';
import Marker from './marker';
import NewBin from './new-bin';
import BinDetails from './bin-details';
import useListBins from "../../hooks/useListBins";
import { GarbageBin } from "../../client/src/models";
import { StateProvider } from "../../context/state";

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


export function App() {
    const { loading, data: location } = useCurrentPosition();
    const { loading: loadingList, data: binList } = useListBins();
    const [binDetails, setBinDetails] = useState();

    if (loading) {
        return <Text>Loading </Text>;
    }

    const renderList = () => {
        if (loadingList) {
            return null;
        } else {
            return binList.map((bin: GarbageBin) => <Marker key={bin.id} id={bin.id} location={bin} onPress={() => { setBinDetails(bin.id) }} />)
        }
    };

    return (
        <View style={styles.container} >
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                initialRegion={location}
                showsUserLocation
                onPress={() => setBinDetails(undefined)}
            >
                {renderList()}
            </MapView>
            {!binDetails && <NewBin />}
            {binDetails && <BinDetails id={binDetails} onRemove={() => {
                setBinDetails(undefined)
            }} />}
        </View>
    );
}

export default () => (
    <StateProvider>
        <App />
    </StateProvider>
);
