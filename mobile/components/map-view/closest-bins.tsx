import React from 'react';
import useListBins from '../../hooks/useListBins';
import { Text, List, ListItem, Body, Left, Button, Icon } from 'native-base';
import distance from '../../util/distance';
import useCurrentPosition from '../../hooks/useCurrentPosition';
import goToBin from '../../util/goToBin';


export default function ClosestBins({ }: {}) {
    const { loading, data: location } = useCurrentPosition();
    const { loading: loadingList, data: binList } = useListBins();

    if (loading || loadingList) {
        return null;
    }

    const sorted = binList.map((bin) => ({ ...bin, distance: distance(bin.latitude, bin.longitude, location.latitude, location.longitude) })).sort((a, b) => a.distance - b.distance);
    const getDistance = (d) => {
        if (d < 200)
            return d.toFixed(0);
        if (d > 200)
            return d.toFixed(0);
    };
    return (
        <List>
            <ListItem itemHeader first>
                <Text>Closest bins:</Text>
            </ListItem>
            {sorted.map((bin) =>
                <ListItem icon key={bin.id} onPress={() => goToBin(bin.latitude, bin.longitude)}>
                    <Left>
                        <Icon active name="navigate" />
                    </Left>
                    <Body>
                        <Text>{getDistance(bin.distance)}m</Text>
                    </Body>
                </ListItem>)}
        </List>
    );
}

