import React, { useState } from 'react';
import { Icon, Fab, Spinner } from 'native-base';
import useCurrentPosition from '../../hooks/useCurrentPosition';
import useAddNewBin from '../../hooks/useAddNewBin';
import { ToastAndroid } from 'react-native';


export default function NewBin({ }) {
    const { loading, data } = useCurrentPosition();
    const addNewBin = useAddNewBin();
    const [isAdding, setIsAdding] = useState(false);

    return <Fab
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
    </Fab >;
}
