import React from "react";
import { AppLoading } from "expo";
import useTopUsers from "../../hooks/useTopUsers";
import { Body, H3, Icon, Left, ListItem, Right, Text, Thumbnail, View } from "native-base";
import gravatar from 'gravatar';


export function RankListView() {
    const {loading, data} = useTopUsers();

    if (loading) {
        return <AppLoading/>;
    }

//md-trophy
    const userList = data.map((user, index) => (

        <ListItem key={user.userId} avatar noBorder={true}>
            <Text style={{marginRight: 10, fontWeight: 'bold'}}>{`#${index + 1}`}</Text>
            <Left style={{height: 60}}>
                <Thumbnail small source={{uri: `https:${gravatar.url(user.email)}`}}/>
            </Left>
            <Text style={{marginLeft: 10, fontWeight: 'bold'}}>{user.username}</Text>
            <Body style={{height: 60}}>
            </Body>
            <Right style={{height: 60}}>
            </Right>
            <Text style={{marginRight: 10, fontWeight: 'bold'}}>{user.points}</Text>
        </ListItem>

    ));

    return <><View>
        <H3 style={{marginLeft: 10, fontWeight: 'bold', marginBottom: 10}}><Icon
            name={'trophy'}/> LeaderBoard</H3>{userList}
    </View></>;
}