import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, {Marker, Overlay, PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import useCurrentPosition from './hooks/useCurrentPosition';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});


export default function App() {
  console.log("Dupa1")
  const {loading, data: location} = useCurrentPosition();

  if (loading) {
    return <Text>Loading</Text>;
  }
  


  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
      <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={location}
          showsUserLocation
      >
        {/**/}
        {/* <Marker */}
            {/* coordinate={{latitude: 37.78825, longitude: -122.4324}}
            icon={{
              uri: 'https://icon-library.net/images/trash-can-icon-png/trash-can-icon-png-28.jpg',
              width: 5,
              height: 100
            }}
            onPress={() => console.warn('asdl2')}
        /> */}
      </MapView>
      <Text>wsdasda</Text>
    </View>
  );
}