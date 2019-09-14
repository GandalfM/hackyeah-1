import React from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import { useStateValue } from "../../context/state";

import { Body, Container, H3, Left, Right, Thumbnail, Header, Content, List, ListItem, Text} from "native-base";
import gravatar from "gravatar";

import Swiper from 'react-native-swiper'

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {

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
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
});

export function RankView() {
    const [state] = useStateValue();
    const {loggedInUser} = state;
    const avatarUrl = loggedInUser !== null ? `https:${gravatar.url(loggedInUser.email)}` : 'https://www.gravatar.com/avatar/?d=identicon';
    return (
        <Swiper style={styles.wrapper}>
            <View style={styles.slide1}>
                <View>
                    <Thumbnail large source={{uri: avatarUrl}}/>
                    <Text style={styles.text}>Mateusz</Text>
                    <Content style={{flexGrow: 1}}>
                        <List>
                            <ListItem itemHeader first>
                                <Text>COMEDY</Text>
                            </ListItem>
                            <ListItem >
                                <Text>Hangover</Text>
                            </ListItem>
                            <ListItem last>
                                <Text>Cop Out</Text>
                            </ListItem>
                            <ListItem itemHeader>
                                <Text>ACTION</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Terminator Genesis</Text>
                            </ListItem>
                        </List>
                    </Content>
                </View>
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