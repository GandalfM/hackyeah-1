import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button, Text, Icon } from 'native-base';
import useRemoveBin from '../../hooks/useRemoveBin';
import goToBin from '../../util/goToBin';
import { GarbageBin } from '../../../backend/src/models';

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
    }
});


export default function BinDetails({ id, bin, onRemove }: { id: number, bin: GarbageBin, onRemove: () => void }) {
    const removeBin = useRemoveBin();
    return (
        <View style={styles.details}>
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
                    <Button light iconLeft onPress={async () => {
                        await removeBin(id);
                        onRemove();
                    }}>
                        <Icon dark name='thumbs-down' />
                        <Text dark>Bin is missing</Text>
                    </Button>
                </View>

            </ScrollView>
        </View>
    );
}

