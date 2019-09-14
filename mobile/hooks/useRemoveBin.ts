import api from "../api";
import { useStateValue } from "../context/state";
import { removeBinAction } from "../actions/bin";
import { ToastAndroid } from "react-native";

export default () => {
    const [state, dispatch] = useStateValue();
    return async (id: number) => {
        await api.garbageBinControllerControllerDeleteById({ id });

        dispatch(removeBinAction(id));
        ToastAndroid.show('Bin was downvoted. Sorry for the confusion :(', ToastAndroid.SHORT);
    }
}