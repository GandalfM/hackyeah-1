import React from 'react';
import { Marker as MapMarker } from 'react-native-maps';
import { Image } from 'react-native';

const markerImg = require('../../assets/marker.png');
const img = <Image style={{width: 15, height: 33}} source={markerImg}/>;
export default function Marker({location, onPress, isSelected}) {
    return <MapMarker
        coordinate={{latitude: location.latitude, longitude: location.longitude}}
        onPress={onPress}
        pinColor={isSelected ? "#2d557a" : "#4e9bc6"}
    >

        {img}
    </MapMarker>
}