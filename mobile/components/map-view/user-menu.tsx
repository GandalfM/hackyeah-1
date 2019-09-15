import React from 'react';
import { Fab, Icon } from 'native-base';
import gravatar from 'gravatar';
import { useStateValue } from "../../context/state";
import { NavigationActions } from "react-navigation";
import useLogin from '../../hooks/useLogin';

const navigateAction = NavigationActions.navigate({
    routeName: 'RankView',
    params: {},
    action: NavigationActions.navigate({ routeName: 'RankView' }),
});

export default function Marker({ navigation }) {
    const [state] = useStateValue();
    const { isLogged, login } = useLogin();
    const { loggedInUser } = state;
    const avatarUrl = loggedInUser !== null ? `https:${gravatar.url(loggedInUser.email)}` : 'https://www.gravatar.com/avatar/?d=identicon';

    return (
        <Fab
            direction="down"
            style={{ backgroundColor: '#000', top: 20 }}
            position="topLeft"
            onPress={() => isLogged ? navigation.dispatch(navigateAction) : login()}  >
            {
                isLogged ? <Icon name="ios-menu" /> : <Icon name="ios-log-in" />
            }
        </Fab>

    );
}
