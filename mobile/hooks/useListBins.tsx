import { GarbageBin } from "../client/src/models";
import { useStateValue } from "../context/state";

export default (): { loading: boolean, data: GarbageBin[] } => {
    const [state, dispatch] = useStateValue();

    return {
        loading: !state.bins,
        data: state.bins
    }
}
