import React, { useState } from 'react';
import { Icon, Fab, Spinner } from 'native-base';
import useCurrentPosition from '../../hooks/useCurrentPosition';
import useAddNewBin from '../../hooks/useAddNewBin';
import useListBins from "../../hooks/useListBins";
import { GarbageBin } from "../../client/src/models";
import { Linking } from "react-native";
import distance from '../../util/distance';

function findClosestBin(userLocation: { latitude: number, longitude: number }, bins: GarbageBin[]) {
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

    const { loading: loadingList, data: binList } = useListBins();

    const [isAdding, setIsAdding] = useState(false);

    return <>
        <Fab
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
        </Fab >
    </>;
}
