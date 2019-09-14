import React from 'react';
import { Button } from 'native-base';
import gravatar from 'gravatar';
import { Image } from "react-native";
import { useStateValue } from "../../context/state";
import { NavigationActions } from "react-navigation";

const navigateAction = NavigationActions.navigate({
    routeName: 'RankView',

    params: {},

    action: NavigationActions.navigate({ routeName: 'RankView' }),
});

export default function Marker({navigation}) {
    console.log(navigation);
    const [state] = useStateValue();
    const avatarUrl = state.loggedInUser !== null ? `https:${gravatar.url(state.loggedInUser.email)}` : 'https://www.gravatar.com/avatar/?d=identicon';
    return !state.loading &&
        <Button
            style={{ width: 60, height: 60, borderRadius: 60/ 2, position: 'absolute', top: 20, left: 20 }}
            onPress={() => navigation.dispatch(navigateAction)}>
            <Image style={{width: 60, height: 60, borderRadius: 60/ 2}} source={{uri: avatarUrl}}/>
        </Button>;
}
