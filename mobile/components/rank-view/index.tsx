import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { useStateValue } from "../../context/state";

import {
    Body,
    Button,
    Container,
    Content,
    Header, Icon,
    Left,
    List,
    ListItem,
    Right, Switch,
    Text,
    Thumbnail,
    View
} from "native-base";
import gravatar from "gravatar";

import Swiper from 'react-native-swiper'
import { FlatList } from "react-native-gesture-handler";
import {RankListView} from "./RankViewList";

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

export function RankView() {
    const [state] = useStateValue();
    const {loggedInUser} = state;
    const avatarUrl = loggedInUser !== null ? `https:${gravatar.url(loggedInUser.email)}` : 'https://www.gravatar.com/avatar/?d=identicon';
    return (
        <Swiper style={styles.wrapper}>
            <View style={styles.container}>
                <View style={{width: '100%', alignItems: 'center', justifyContent: 'flex-start'}}>
                    <Image style={{width: 150, height: 150, borderRadius: 150}} source={{uri: avatarUrl}}/>
                    <Text style={styles.text}>Mateusz</Text>
                </View>
                <ListItem icon>
                    <Left>
                        <Button style={{ backgroundColor: "#FF9501" }}>
                            <Icon active name="airplane" />
                        </Button>
                    </Left>
                    <Body>
                        <Text>Airplane Mode</Text>
                    </Body>
                    <Right>
                        <Switch value={false} />
                    </Right>
                </ListItem>
                <ListItem icon>
                    <Left>
                        <Button style={{ backgroundColor: "#007AFF" }}>
                            <Icon active name="wifi" />
                        </Button>
                    </Left>
                    <Body>
                        <Text>Wi-Fi</Text>
                    </Body>
                    <Right>
                        <Text>GeekyAnts</Text>
                        <Icon active name="arrow-forward" />
                    </Right>
                </ListItem>
                <ListItem icon>
                    <Left>
                        <Button style={{ backgroundColor: "#007AFF" }}>
                            <Icon active name="bluetooth" />
                        </Button>
                    </Left>
                    <Body>
                        <Text>Bluetooth</Text>
                    </Body>
                    <Right>
                        <Text>On</Text>
                        <Icon active name="arrow-forward" />
                    </Right>
                </ListItem>
            </View>
            <View style={styles.container}>
                <RankListView/>
            </View>
        </Swiper>);
}