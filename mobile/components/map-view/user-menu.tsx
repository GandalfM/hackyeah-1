import React, { useState } from 'react';
import { Button, Fab, Icon } from 'native-base';
import gravatar from 'gravatar';
import { Image } from "react-native";

export default function Marker({ loggedInUser, loading }) {
    console.log("iser", loggedInUser);
    const avatarUrl = loggedInUser !== null ? gravatar.url(loggedInUser[0].email) : 'https://www.gravatar.com/avatar/?d=identicon';
    console.log('avatar url', avatarUrl);
    const [active, setActive] = useState(false);
    return <Fab
        active={active}
        direction="down"
        containerStyle={{}}
        style={{ backgroundColor: '#5067FF' }}
        position="topLeft"
        onPress={() => setActive(!active)}>
        <Image source={{uri: 'http://www.gravatar.com/avatar/e35907a4e15da2dddd7eed0e6b5e5345'}}/>
        <Button style={{ backgroundColor: '#34A34F' }}>
            <Image source={{uri: 'http://www.gravatar.com/avatar/e35907a4e15da2dddd7eed0e6b5e5345'}}/>
        </Button>
        <Button style={{ backgroundColor: '#3B5998' }}>
            <Icon name="logo-facebook" />
        </Button>
        <Button disabled style={{ backgroundColor: '#DD5144' }}>
            <Icon name="mail" />
        </Button>
    </Fab>;
}
