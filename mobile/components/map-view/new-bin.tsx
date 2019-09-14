import React, { useState } from 'react';
import { Icon, Fab } from 'native-base';
import useCurrentPosition from '../../hooks/useCurrentPosition';
import useAddNewBin from '../../hooks/useAddNewBin';

export default function NewBin({ }) {
    const { loading, data } = useCurrentPosition();
    const addNewBin = useAddNewBin();

    return <Fab
        direction="up"
        style={{ backgroundColor: '#5067FF' }}
        position="bottomRight"
        onPress={() => {
            addNewBin({
                latitude: data.latitude,
                longitude: data.longitude,
            });
        }}>
        <Icon name="add" />
    </Fab >;
}
