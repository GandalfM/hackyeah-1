import React, { useState } from 'react';
import { Icon, Fab, Spinner } from 'native-base';
import useCurrentPosition from '../../hooks/useCurrentPosition';
import useAddNewBin from '../../hooks/useAddNewBin';
import useListBins from "../../hooks/useListBins";
import { GarbageBin } from "../../client/src/models";
import { Linking } from "react-native";
import distance from '../../util/distance';
import Animated from 'react-native-reanimated'

export default function NewBin({ marginBottom }) {
    const { loading, data } = useCurrentPosition();
    const addNewBin = useAddNewBin();

    const { loading: loadingList, data: binList } = useListBins();

    const [isAdding, setIsAdding] = useState(false);

    return <>
        <Fab
            direction="up"
            style={{ backgroundColor: '#5067FF', marginBottom }}
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
