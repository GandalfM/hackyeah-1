import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import useRemoveBin from '../../hooks/useRemoveBin';

const styles = StyleSheet.create({
    details: {
        position: "absolute",
        left: 30,
        right: 30,
        bottom: 0,
        height: 100,
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    }
});


export default function BinDetails({ id, onRemove }: { id: number, onRemove: () => {} }) {
    const removeBin = useRemoveBin();
    return (
        <View style={styles.details} >
            <Text>Bin of number {id}</Text>
            <Button title="Downvote bin" onPress={async () => {
                await removeBin(id);
                onRemove();
            }}></Button>
        </View>
    );
}

