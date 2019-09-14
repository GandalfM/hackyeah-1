import { GarbageBinExcludingId } from "../client/src";
import api from "../api";
import { useStateValue } from "../context/state";
import { addNewBinAction } from "../actions/bin";
import { ToastAndroid } from "react-native";

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
        ToastAndroid.show('You made the world a better place - new bin was added!', ToastAndroid.SHORT);
    }
}