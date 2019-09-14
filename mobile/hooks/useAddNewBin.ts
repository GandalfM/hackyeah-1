import { GarbageBinExcludingId } from "../client/src";
import api from "../api";
import { useStateValue } from "../context/state";
import { addNewBinAction } from "../actions/bin";

export default () => {
    const [state, dispatch] = useStateValue();
    return async (garbageBinExcludingId: GarbageBinExcludingId) => {
        const data = await api.garbageBinControllerControllerCreate({
            garbageBinExcludingId: {
                latitude: garbageBinExcludingId.latitude,
                longitude: garbageBinExcludingId.longitude,
            }
        });

        dispatch(addNewBinAction(data));
    }
}