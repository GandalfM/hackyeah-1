import React from "react";
import {AppLoading} from "expo";
import useTopUsers from "../../hooks/useTopUsers";
import {Body, Left, ListItem, Right, Text, Thumbnail, H3} from "native-base";
import gravatar from 'gravatar';


export function RankListView() {
    const {loading, data} = useTopUsers();

    if (loading) {
        return <AppLoading />;
    }

//md-trophy
    const userList = data.map((user, index) => (
        <ListItem key={user.userId} avatar>
            <Left style={{height: 60}}>
                <Thumbnail small source={{ uri: `https:${gravatar.url(user.email)}`}} />


            </Left>
            <Body style={{height: 60}}>
                <Text>{user.username}</Text>
                <Text></Text>
            </Body>
            <Right style={{height: 60}}>
                <Text>{user.points}</Text>
            </Right>
        </ListItem>
    ));

    return <>{userList}</>;
}