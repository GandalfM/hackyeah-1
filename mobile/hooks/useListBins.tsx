import React, { useEffect, useState } from 'react';
import { GarbageBin } from "../client/src/models";
import { useStateValue } from "../context/state";
import api from '../api';

export default (): { loading: boolean, data: GarbageBin[] } => {
    const [state, dispatch] = useStateValue();

    useEffect(() => {
        (async () => {
            api.garbageBinControllerControllerFind({})
                .then((result) => {
                    dispatch({ type: 'SET_BINS', bins: result });
                })
                .catch(console.error);
        })();
    }, []);

    return {
        loading: !state.bins,
        data: state.bins
    }
}
