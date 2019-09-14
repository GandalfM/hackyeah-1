import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import useCurrentPosition from '../../hooks/useCurrentPosition';
import Marker from './marker';
import NewBin from './new-bin';
import BinDetails from './bin-details';
import UserMenu from './user-menu';
import useListBins from "../../hooks/useListBins";
import { GarbageBin } from "../../client/src/models";
import useLoggedInUserProfile from "../../hooks/useLoggedInUserProfile";
import { AppLoading } from 'expo';
import { BottomDrawer } from './bottom-drawer';

const MINIMAL_DRAWER = 50;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: MINIMAL_DRAWER,
    },
    map: {
        flex: 1
    },
});

const Lorem = () => (
    <View style={{ backgroundColor: 'white' }}>
        <Text>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
            praesentium voluptatum deleniti atque corrupti quos dolores et quas
            molestias excepturi sint occaecati cupiditate non provident, similique
            sunt in culpa qui officia deserunt mollitia animi, id est laborum et
            dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
            assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut
            officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates
            repudiandae sint et molestiae non recusandae. Itaque earum rerum hic
            tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat. At vero eos et
            accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum deleniti atque corrupti quos dolores et quas molestias
            excepturi sint occaecati cupiditate non provident, similique sunt in culpa
            qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et
            harum quidem rerum facilis est et expedita distinctio. Nam libero tempore,
            cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
            maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum
            necessitatibus saepe eveniet ut et voluptates repudiandae sint et
            molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
            delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
            perferendis doloribus asperiores repellat.
      </Text>
    </View>
)

export function MapViewScreen({ navigation }) {
    const { loading, data: location } = useCurrentPosition();
    const { loading: loadingList, data: binList } = useListBins();
    const { data: loggedInUser, loading: loadingLoggedInUser } = useLoggedInUserProfile("mateusz.szerszynski@gmail.com");
    const [binDetails, setBinDetails] = useState(undefined);


    if (loading) {
        return <AppLoading />;
    }

    const renderList = () => {
        if (loadingList) {
            return null;
        } else {
            return binList.map((bin: GarbageBin) => <Marker key={bin.id} location={bin} onPress={() => { setBinDetails(bin.id) }} />)
        }
    };

    return (
        <>
            <BottomDrawer
                minimalSize={MINIMAL_DRAWER}
                headerText={binDetails ? `Bin ${binDetails}` : `Hi, do you want to throw sth?`}
            >
                {binDetails ? <BinDetails id={binDetails} onRemove={() => {
                    setBinDetails(undefined)
                }} /> : <Lorem />}
            </BottomDrawer>
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    initialRegion={location}
                    showsUserLocation
                    onPress={() => setBinDetails(undefined)}
                >
                    {renderList()}
                </MapView>
                {!binDetails && <NewBin />}
                <UserMenu navigation={navigation} />
            </View >
        </>
    );
}