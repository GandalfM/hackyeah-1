import React, { useEffect, useState } from 'react';
import * as Permissions from 'expo-permissions';

const LATITUDE_DELTA = 0.001;
const LONGITUDE_DELTA = 0.001;

interface Location {
    latitude: number,
    longitude: number,
    latitudeDelta: number,
    longitudeDelta: number,
}

let CACHED_LOCATION = undefined;

export default (): {
    loading: boolean, data: Location | undefined
} => {
    const [location, setLocation] = useState(CACHED_LOCATION ? CACHED_LOCATION : undefined);

    useEffect(() => {

        let watchId = -1;
        (async () => {
            await Permissions.askAsync(Permissions.LOCATION);
            watchId = navigator.geolocation.watchPosition(
                (position) => {
                    const region = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    };
                    setLocation(region);
                    CACHED_LOCATION = region;
                }, (error) => console.error(error), {
                timeout: 15000,
                maximumAge: 60 * 1000,
                enableHighAccuracy: true,
            });

        })();

        return () => {
            if (watchId) {
                navigator.geolocation.clearWatch(watchId);
            }
        }
    }, []);

    return {
        loading: !location,
        data: location
    }
}
