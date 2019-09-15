import { useEffect } from 'react';
import { useStateValue } from "../context/state";
import { garbageApi } from '../api';

const TIMEOUT_INTERVAL = 5000;

export default (): void => {
    const [_, dispatch] = useStateValue();

    useEffect(() => {
        let timeoutId = null;
        const load = async () => {
            garbageApi.garbageBinControllerControllerFind({})
                .then((result) => {
                    dispatch({ type: 'SET_BINS', bins: result });
                    timeoutId = setTimeout(load, TIMEOUT_INTERVAL);
                })
                .catch(console.error);
        };
        load();

        return () => (clearTimeout(timeoutId))
    }, []);

}
