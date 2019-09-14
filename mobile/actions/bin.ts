import { GarbageBin } from "../client/src";

export const addNewBinAction = (bin: GarbageBin) => ({
    type: 'ADD_NEW_BIN',
    payload: bin,
});