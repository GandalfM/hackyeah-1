import React, { useState } from 'react';
import { Icon, Fab, Spinner } from 'native-base';
import useCurrentPosition from '../../hooks/useCurrentPosition';
import useAddNewBin from '../../hooks/useAddNewBin';
import useListBins from "../../hooks/useListBins";
import { GarbageBin } from "../../client/src/models";
import { Linking } from "react-native";
import distance from '../../util/distance';
import Animated from 'react-native-reanimated'

export default function NewBin({ marginBottom, enabled }) {
    const { loading, data } = useCurrentPosition();
    const addNewBin = useAddNewBin();

    const { loading: loadingList, data: binList } = useListBins();

    const [isAdding, setIsAdding] = useState(false);
    const fabColor = enabled ? '#5067FF' : '#4559fada';
    return <>
        <Fab
            active={false}
            direction="up"
            style={{ backgroundColor: fabColor }}
            position="bottomRight"
            onPress={async () => {
                if (enabled) {
                    setIsAdding(true);
                    await addNewBin({
                        latitude: data.latitude,
                        longitude: data.longitude,
                    });
                    setIsAdding(false);
                }

            }}>
            {isAdding ? <Spinner /> : <Icon name="add" />}
        </Fab >
    </>;
}
