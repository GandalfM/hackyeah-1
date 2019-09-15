import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import useCurrentPosition from '../../hooks/useCurrentPosition';
import Marker from './marker';
import NewBin from './new-bin';
import BinDetails from './bin-details';
import UserMenu from './user-menu';
import useListBins from "../../hooks/useListBins";
import { GarbageBin } from "../../client/src/models";
import useLoggedInUserProfile from "../../hooks/useLoggedInUserProfile";
import { AppLoading } from 'expo';
import { BottomDrawer } from './bottom-drawer';
import ClosestBins from './closest-bins';

const MINIMAL_DRAWER = 50;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: MINIMAL_DRAWER,
    },
    map: {
        flex: 1
    },
});

export function MapViewScreen({ navigation }) {
    const { loading, data: location } = useCurrentPosition();
    const { loading: loadingList, data: binList } = useListBins();
    const { data: loggedInUser, loading: loadingLoggedInUser } = useLoggedInUserProfile("mateusz.szerszynski@gmail.com");
    const [binDetails, setBinDetails] = useState(undefined);


    if (loading) {
        return <AppLoading />;
    }

    const renderList = () => {
        if (loadingList) {
            return null;
        } else {
            return binList.map((bin: GarbageBin) => <Marker key={bin.id} location={bin} onPress={() => { setBinDetails(bin.id) }} />)
        }
    };

    return (
        <>
            <BottomDrawer
                minimalSize={MINIMAL_DRAWER}
                headerText={binDetails ? `Bin ${binDetails}` : `Hi, do you want to throw sth?`}
            >
                {binDetails ? <BinDetails id={binDetails} onRemove={() => {
                    setBinDetails(undefined)
                }} /> : <ClosestBins />}
            </BottomDrawer>
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    initialRegion={location}
                    showsUserLocation
                    onPress={() => setBinDetails(undefined)}
                >
                    {renderList()}
                </MapView>
                {!binDetails && <NewBin marginBottom="0" />}
                <UserMenu navigation={navigation} />
            </View >
        </>
    );
}