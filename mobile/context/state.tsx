import React, { createContext, Dispatch, useContext, useReducer } from 'react';
import { GarbageBin } from "../client/src/models";
import { User } from "../../backend/src/models";

interface GlobalState {
    bins: GarbageBin[] | null
    loggedInUser: User | null
    isUserLogged: boolean | null,
}

const reducer = (state: GlobalState, action): GlobalState => {
    switch (action.type) {
        case 'SET_BINS':
            return {
                ...state,
                bins: action.bins
            };

        case 'ADD_NEW_BIN': {
            return {
                ...state,
                bins: [...state.bins, action.payload]
            }
        }

        case 'REMOVE_BIN': {
            return {
                ...state,
                bins: state.bins.filter(({ id }) => id !== action.payload)
            }
        }

        case 'SET_LOGGED_IN_USER': {
            return {
                ...state,
                loggedInUser: action.loggedInUser,
                isUserLogged: !!action.loggedInUser
            }
        }

        case 'SET_IS_LOGGED_IN': {
            return {
                ...state,
                isUserLogged: action.payload
            }
        }

        default:
            return state;
    }
};

export const StateContext = createContext<[GlobalState, Dispatch<any>]>(null);
export const StateProvider = ({ children }) => (
    <StateContext.Provider value={useReducer(reducer, { bins: null, loggedInUser: null, isUserLogged: null })}>
        {children}
    </StateContext.Provider>
);


export const useStateValue = () => useContext(StateContext);