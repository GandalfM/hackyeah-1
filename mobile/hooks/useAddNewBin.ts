import { GarbageBinExcludingId } from "../client/src";
import {garbageApi} from "../api";
import { useStateValue } from "../context/state";
import { addNewBinAction } from "../actions/bin";
import { ToastAndroid } from "react-native";

export default () => {
    const [state, dispatch] = useStateValue();
    let data;
    return async (garbageBinExcludingId: GarbageBinExcludingId) => {
        try {
            data = await garbageApi.garbageBinControllerControllerCreate({
                garbageBinExcludingId: {
                    userId: state.loggedInUser.id.toString(),
                    latitude: garbageBinExcludingId.latitude,
                    longitude: garbageBinExcludingId.longitude,
                }
            });

        } catch (e) {
            console.log(e);
        }

        dispatch(addNewBinAction(data));
        ToastAndroid.show('You made the world a better place - new bin was added!', ToastAndroid.SHORT);
    }
}