import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Marker as MapMarker } from 'react-native-maps';

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


export default function Marker({ location }) {

    return <MapMarker
        coordinate={{ latitude: location.latitude, longitude: location.longitude }}
        title="Bla"
        description="bla2"
        icon={{
            uri: 'https://icon-library.net/images/trash-can-icon-png/trash-can-icon-png-28.jpg',
            width: 5,
            height: 100
        }}
        onPress={() => console.warn('asdl2')}
    />
}
