import React from 'react';
import { Fab, Icon } from 'native-base';
import gravatar from 'gravatar';
import { useStateValue } from "../../context/state";
import { NavigationActions } from "react-navigation";

const navigateAction = NavigationActions.navigate({
    routeName: 'RankView',
    params: {},
    action: NavigationActions.navigate({routeName: 'RankView'}),
});

export default function Marker({navigation}) {
    const [state] = useStateValue();
    const {loggedInUser} = state;
    const avatarUrl = loggedInUser !== null ? `https:${gravatar.url(loggedInUser.email)}` : 'https://www.gravatar.com/avatar/?d=identicon';
    return (
        <Fab
            direction="down"
            style={{backgroundColor: '#000', top: 20}}
            position="topLeft"
            onPress={async () => navigation.dispatch(navigateAction)}>
            <Icon name="ios-menu"/>
        </Fab>

    );
}
