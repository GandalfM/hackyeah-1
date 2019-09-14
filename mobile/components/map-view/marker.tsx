import React from 'react';
import { Marker as MapMarker } from 'react-native-maps';

export default function Marker({ location }) {
    return <MapMarker
        coordinate={{ latitude: location.latitude, longitude: location.longitude }}
        title="Bla"
        description="bla2"
        onPress={() => console.warn('asdl2')}
    />
}
