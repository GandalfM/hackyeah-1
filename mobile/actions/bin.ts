import { GarbageBin } from "../client/src";

export const addNewBinAction = (bin: GarbageBin) => ({
    type: 'ADD_NEW_BIN',
    payload: bin,
});

export const removeBinAction = (id: number) => ({
    type: 'REMOVE_BIN',
    payload: id,
});