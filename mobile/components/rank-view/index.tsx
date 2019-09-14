import React from 'react';
import { AppRegistry, StyleSheet } from 'react-native';
import { useStateValue } from "../../context/state";

import {Body, Container, H3, Left, Right, Thumbnail, Header, Content, List, ListItem, Text, View} from "native-base";
import gravatar from "gravatar";

import Swiper from 'react-native-swiper'
import {styles} from "./styles";
import {RankListView} from "./RankView";

export function RankView() {
    const [state] = useStateValue();
    const {loggedInUser} = state;
    const avatarUrl = loggedInUser !== null ? `https:${gravatar.url(loggedInUser.email)}` : 'https://www.gravatar.com/avatar/?d=identicon';
    return (
        <Swiper style={styles.wrapper}>
            <View style={styles.slide1}>
                <RankListView/>
            </View>
            <View style={styles.slide1}>
                <Container>
                    <Header />
                    <Content>
                        <List>
                            <ListItem avatar>
                                <Left>
                                    <Thumbnail source={{ uri: 'Image URL' }} />
                                </Left>
                                <Body>
                                    <Text>Kumar Pratik</Text>
                                    <Text note>Doing what you like will always keep you happy . .</Text>
                                </Body>
                                <Right>
                                    <Text note>3:43 pm</Text>
                                </Right>
                            </ListItem>
                        </List>
                    </Content>
                </Container>
            </View>
        </Swiper>
    );
}