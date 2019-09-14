import React, { useEffect, useState } from 'react';
import {GarbageBinControllerControllerApi} from "../client/src/apis";

const LATITUDE_DELTA = 0.001;
const LONGITUDE_DELTA = 0.001;


export default () => {
    const [location, setLocation] = useState(undefined);
    const api = new GarbageBinControllerControllerApi();
    api.garbageBinControllerControllerFind({})
        .then((result) => console.log('asda', result))
        .catch(console.error);
    useEffect(() => {
        (async () => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const region = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    };
                    setLocation(region);
                });
        })();
    }, []);

    return {
        loading: !location,
        data: location
    }
}
