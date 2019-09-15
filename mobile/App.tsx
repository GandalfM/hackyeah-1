import { MapViewScreen } from './components/map-view';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StateProvider } from "./context/state";
import React, { useEffect, useState } from "react";
import { RankView } from "./components/rank-view";
import { YellowBox } from "react-native";
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

YellowBox.ignoreWarnings(['Require cycle:']);

const AppNavigator = createStackNavigator({
    MapView: {
        screen: MapViewScreen,
        navigationOptions: {
            header: null,
        },
    },
    RankView: {
        screen: RankView
    },
});

const Component = createAppContainer(AppNavigator);

export default () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        (async () => {
            await Font.loadAsync({
                Roboto: require('native-base/Fonts/Roboto.ttf'),
                Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
                ...Ionicons.font,
            });
            setIsLoading(false);
        })();
    }, []);

    if (isLoading) {
        return <AppLoading/>;
    }
    return <StateProvider>
        <Component/>
    </StateProvider>
};