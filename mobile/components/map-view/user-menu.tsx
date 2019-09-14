import React, { useState } from 'react';
import { Button } from 'native-base';
import gravatar from 'gravatar';
import { Image } from "react-native";

export default function Marker({ loggedInUser, loading }) {
    const avatarUrl = loggedInUser !== null ? `https:${gravatar.url(loggedInUser[0].email)}` : 'https://www.gravatar.com/avatar/?d=identicon';
    console.log(loggedInUser);
    return !loading &&
        <Button
            style={{ width: 60, height: 60, borderRadius: 60/ 2, position: 'absolute', top: 20, left: 20 }}
            onPress={() => console.log('#######################################')}>
            <Image style={{width: 60, height: 60, borderRadius: 60/ 2}} source={{uri: avatarUrl}}/>
        </Button>;
}
