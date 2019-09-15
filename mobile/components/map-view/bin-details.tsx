import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button, Text, Icon } from 'native-base';
import useRemoveBin from '../../hooks/useRemoveBin';
import goToBin from '../../util/goToBin';
import { GarbageBin } from '../../../backend/src/models';
import { niceLookingDistance } from '../../util/distance';
import useCurrentPosition from '../../hooks/useCurrentPosition';

const styles = StyleSheet.create({
    details: {
        height: '100%',
        backgroundColor: 'white'
    },
    actionBar: {
        flexDirection: 'row',
        padding: 10,
    },
    buttonContainer: {
        flex: 1,
        paddingRight: 10
    },
    textContainer: {
        margin: 5,
    },
});


export default function BinDetails({ id, bin, onRemove }: { id: number, bin: GarbageBin, onRemove: () => void }) {
    const removeBin = useRemoveBin();
    const { data: position } = useCurrentPosition();
    return (
        <View style={styles.details}>
            <Text style={styles.textContainer}>In just {niceLookingDistance(bin.latitude, bin.longitude, position.latitude, position.longitude)}m from you!</Text>
            <ScrollView style={styles.actionBar} horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.buttonContainer}>
                    <Button dark iconLeft onPress={async () => {
                        goToBin(bin.latitude, bin.longitude);
                    }}>
                        <Icon name='navigate' />
                        <Text>Go to</Text>
                    </Button>
                </View>

                <View style={styles.buttonContainer}>
                    <Button light disabled iconLeft onPress={async () => {
                        null;
                        // await removeBin(id);
                        // onRemove();
                    }}>
                        <Icon dark name='thumbs-down' />
                        <Text dark>Bin is missing</Text>
                    </Button>
                </View>

            </ScrollView>
        </View>
    );
}

