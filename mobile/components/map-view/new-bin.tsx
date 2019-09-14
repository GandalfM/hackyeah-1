import React, { useState } from 'react';
import { Icon, Fab, Spinner } from 'native-base';
import useCurrentPosition from '../../hooks/useCurrentPosition';
import useAddNewBin from '../../hooks/useAddNewBin';
import useListBins from "../../hooks/useListBins";
import {GarbageBin} from "../../client/src/models";
import {Linking} from "react-native";

function distance(lat1,lon1,lat2,lon2) : number {
    var R = 6371; // km (change this constant to get miles)
    var dLat = (lat2-lat1) * Math.PI / 180;
    var dLon = (lon2-lon1) * Math.PI / 180;
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180 ) * Math.cos(lat2 * Math.PI / 180 ) *
        Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return d * 1000;
}

function findClosestBin(userLocation: {latitude: number, longitude: number}, bins: GarbageBin[]) {
    const binsWithDistances = bins.map(bin => (
        {
            bin,
            distance: distance(bin.latitude, bin.longitude, userLocation.latitude, userLocation.longitude)
        }));
    binsWithDistances.sort((bin1, bin2) => bin1.distance - bin2.distance);

    return binsWithDistances[0];
}

export default function NewBin({ }) {
    const { loading, data } = useCurrentPosition();
    const addNewBin = useAddNewBin();

    const {loading: loadingList, data: binList} = useListBins();

    const [isAdding, setIsAdding] = useState(false);

    return <><Fab
        direction="up"
        style={{ backgroundColor: '#5067FF' }}
        position="bottomRight"
        onPress={async () => {
            setIsAdding(true);
            await addNewBin({
                latitude: data.latitude,
                longitude: data.longitude,
            });
            setIsAdding(false);
        }}>
        {isAdding ? <Spinner /> : <Icon name="add" />}
    </Fab ><Fab
        direction="up"
        style={{ backgroundColor: '#5067FF', position: 'absolute', bottom: 80 }}
        position="bottomRight"
        onPress={async () => {
            if (!binList) {
                return;
            }
            const location = findClosestBin(data, binList);
            console.log('about to navigate to', location);
            var url = `https://www.google.com/maps/dir/?api=1&travelmode=walking&dir_action=navigate&destination=${location.bin.latitude}, ${location.bin.longitude}`;
            Linking.canOpenURL(url).then(supported => {
                if (!supported) {
                    console.log('Can\'t handle url: ' + url);
                } else {
                    return Linking.openURL(url);
                }
            }).catch(err => console.error('An error occurred', err));
        }}>
        {isAdding ? <Spinner /> : <Icon name="md-walk" />}
    </Fab >
    </>;
}
