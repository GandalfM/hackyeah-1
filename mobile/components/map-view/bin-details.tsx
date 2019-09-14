import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button, Text, Icon } from 'native-base';
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
        padding: 10,
    },
    actionBar: {
        flexDirection: 'row',
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        paddingRight: 10
    }
});


export default function BinDetails({ id, onRemove }: { id: number, onRemove: () => void }) {
    const removeBin = useRemoveBin();
    return (
        <View style={styles.details} >
            <Text>Bin of number {id}</Text>
            <ScrollView style={styles.actionBar} horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.buttonContainer}>
                    <Button iconLeft onPress={async () => {
                        await removeBin(id);
                        onRemove();
                    }}>
                        <Icon name='thumbs-down' />
                        <Text>Downvote</Text>
                    </Button>
                </View>

                <View style={styles.buttonContainer}>
                    <Button iconLeft onPress={async () => {
                    }}>
                        <Icon name='thumbs-up' />
                        <Text>Upvote</Text>
                    </Button>
                </View>
            </ScrollView>
        </View>
    );
}

