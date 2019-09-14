import { MapViewScreen } from './components/map-view';
// import RankView from './components/map-view';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StateProvider } from "./context/state";
import React from "react";
import { RankView } from "./components/rank-view";
import { YellowBox } from "react-native";

YellowBox.ignoreWarnings(['Require cycle:']);

const AppNavigator = createStackNavigator({
    MapView: {
        screen: MapViewScreen
    },

    RankView: {
        screen: RankView
    },
}, {
    initialRouteName: 'MapView'
});

const Component = createAppContainer(AppNavigator);

export default () => (
    <StateProvider>
        <Component/>
    </StateProvider>
);