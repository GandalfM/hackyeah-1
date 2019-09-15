import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import BottomSheet from 'reanimated-bottom-sheet'
import { H3 } from 'native-base';

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        padding: 10,
        paddingTop: 15,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    content: { backgroundColor: 'white' },
    divider: {
        flex: 1,
        marginTop: 10,
        borderColor: '#ccc',
        borderWidth: 3,
        borderRadius: 2,
        width: '10%'
    },
    greeting: {
        fontSize: 16,
        lineHeight: 25,
    }
});

export function BottomDrawer({ headerText, minimalSize, children }) {
    return (
        <BottomSheet
            snapPoints={['50%', 200, minimalSize]}
            initialSnap={1}
            renderContent={() =>
                <View style={styles.content}>
                    {children}
                </View>
            }
            renderHeader={() =>
                <View style={styles.headerContainer}>
                    <Text style={styles.greeting}>{headerText}</Text>
                    <View style={styles.divider} />
                </View>}
        >
        </BottomSheet>
    );
}