import React, { useEffect, useState } from 'react';

const LATITUDE_DELTA = 0.001;
const LONGITUDE_DELTA = 0.001;

interface Location {
    latitude: number,
    longitude: number,
    latitudeDelta: number,
    longitudeDelta: number,
}

export default (): {
    loading: boolean, data: Location
} => {
    const [location, setLocation] = useState<Location>(undefined);

    useEffect(() => {
        const watchId = navigator.geolocation.watchPosition(
            (position) => {
                const region = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA,
                };
                setLocation(region);
            }, (error) => console.error(error), {
            timeout: 15000,
            maximumAge: 60 * 1000,
            enableHighAccuracy: true,
        });

        return () => {
            navigator.geolocation.clearWatch(watchId);
        }
    }, []);

    return {
        loading: !location,
        data: location
    }
}
