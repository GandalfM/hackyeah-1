import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { useStateValue } from "../../context/state";

import { Body, Button, Icon, Left, ListItem, Right, Spinner, Text, View } from "native-base";
import gravatar from "gravatar";

import Swiper from 'react-native-swiper'
import { RankListView } from "./RankViewList";
import useUserScore from "../../hooks/useUserScore";
import useListBins from "../../hooks/useListBins";
import useLogin from '../../hooks/useLogin';
import { NavigationActions } from 'react-navigation';

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        fontSize: 30,
        paddingTop: 10,
        fontWeight: 'bold'
    },
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

export function RankView({ navigation }) {
    const [state] = useStateValue();
    const { loading: loadingSummary, data: userSummary } = useUserScore();
    const { loading: loadingBins, data: bins } = useListBins();
    const { logout } = useLogin();

    const { loggedInUser } = state;
    const avatarUrl = loggedInUser !== null ? `https:${gravatar.url(loggedInUser.email)}` : 'https://www.gravatar.com/avatar/?d=identicon';
    const reportedBinsCount = bins.filter(bin => bin.userId === loggedInUser.id).length;

    return (
        <Swiper style={styles.wrapper}>
            <View style={styles.container}>
                <View style={{ width: '100%', alignItems: 'center', justifyContent: 'flex-start', marginBottom: 20 }}>
                    <Image style={{ width: 150, height: 150, borderRadius: 150 }} source={{ uri: avatarUrl }} />
                    <Text style={styles.text}>{loggedInUser.username}</Text>
                </View>
                <ListItem icon>
                    <Left>
                        <Button style={{ backgroundColor: "#007AFF" }}>
                            <Icon active name="ios-pulse" />
                        </Button>
                    </Left>
                    <Body>
                        <Text>Karma</Text>
                    </Body>
                    <Right>
                        {!loadingSummary ? <Text>{userSummary.points}</Text> : <Spinner />}
                    </Right>
                </ListItem>
                <ListItem icon>
                    <Left>
                        <Button style={{ backgroundColor: "#FF9501" }}>
                            <Icon active name="ios-flag" />
                        </Button>
                    </Left>
                    <Body>
                        <Text>Bins reported</Text>
                    </Body>
                    <Right>
                        {!loadingBins ? <Text>{reportedBinsCount}</Text> : <Spinner />}
                    </Right>
                </ListItem>
                <ListItem icon onPress={async () => {
                    const navigateAction = NavigationActions.navigate({
                        routeName: 'MapView',
                        params: {},
                        action: NavigationActions.navigate({ routeName: 'MapView' }),
                    });

                    await navigation.dispatch(navigateAction);
                    await logout();
                }}>
                    <Left>
                        <Button style={{ backgroundColor: "black" }}>
                            <Icon active name="ios-log-out" />
                        </Button>
                    </Left>
                    <Body>
                        <Text>Log out</Text>
                    </Body>
                </ListItem>
            </View>
            <View style={styles.container}>
                <RankListView />
            </View>
        </Swiper>);
}