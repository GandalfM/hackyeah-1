import React, { useEffect, useState } from 'react';
import {GarbageBinControllerControllerApi} from "../client/src/apis";
import {GarbageBin} from "../client/src/models";

const api = new GarbageBinControllerControllerApi();

export default () : {loading: boolean, data: GarbageBin[]} => {
    const [bins, setBins] = useState(null);

    useEffect(() => {
        (async () => {
            api.garbageBinControllerControllerFind({})
                .then((result) => {
                    setBins(result);
                })
                .catch(console.error);
        })();
    }, []);

    return {
        loading: !bins,
        data: bins
    }
}
