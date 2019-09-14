import React from 'react';
import { Marker as MapMarker, Callout } from 'react-native-maps';
import {
    View,
    Text,
    Button
} from 'react-native';
import useRemoveBin from '../../hooks/useRemoveBin';

export default function Marker({ location, id, onPress }) {
    const removeBin = useRemoveBin();
    return <MapMarker
        coordinate={{ latitude: location.latitude, longitude: location.longitude }}
        onPress={onPress}
    >
    </MapMarker>
}
