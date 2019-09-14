import React from "react";
import {AppLoading} from "expo";
import {View} from "react-native";
import useTopUsers from "../../hooks/useTopUsers";
import {Content, List, ListItem, Text, Thumbnail} from "native-base";
import {styles} from "./styles";

export function RankListView() {
    const {loading, data: binList} = useTopUsers();

    if (loading) {
        return <AppLoading />;
    }

    return (
        <>
            {/*<Thumbnail large source={{uri: avatarUrl}}/>*/}
            <Text style={styles.text}>Mateusz</Text>

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
        </ >
    );
}