import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import useCurrentPosition from '../../hooks/useCurrentPosition';
import Marker from './marker';
import NewBin from './new-bin';
import UserMenu from './user-menu';
import useListBins from "../../hooks/useListBins";
import { GarbageBin } from "../../client/src/models";
import useLoggedInUserProfile from "../../hooks/useLoggedInUserProfile";

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


export function MapViewScreen() {
    const {loading, data: location} = useCurrentPosition();
    const {loading: loadingList, data: binList} = useListBins();
    const {loading: loadingUser, data: loggedInUserProfile} = useLoggedInUserProfile();


    if (loading) {
        return <Text>Loading </Text>;
    }

    const renderList = () => {
        if (loadingList) {
            return null;
        } else {
            return binList.map((bin: GarbageBin) => <Marker key={bin.id} location={bin}/>)
        }
    };

    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                initialRegion={location}
                showsUserLocation
            >
                {renderList()}
            </MapView>
            <UserMenu loggedInUser={loggedInUserProfile} loading={loadingUser}/>
            <NewBin/>
        </View>
    );
}