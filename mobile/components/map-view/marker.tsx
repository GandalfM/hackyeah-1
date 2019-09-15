import React from 'react';
import { Marker as MapMarker } from 'react-native-maps';

export default function Marker({ location, onPress, isSelected }) {
    return <MapMarker
        coordinate={{ latitude: location.latitude, longitude: location.longitude }}
        onPress={onPress}
        pinColor={isSelected ? "aqua" : "navy"}
    >
    </MapMarker>
}
