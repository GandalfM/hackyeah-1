import React, { useEffect, useState } from 'react';
import { UserControllerApi } from '../client/src/apis';
import { User } from '../client/src/models';
import { useStateValue } from "../context/state";

const api = new UserControllerApi();

export default (email: string): { loading: boolean, data: User } => {
    const [state, dispatch] = useStateValue();

    useEffect(() => {
        (async () => {
            api.userControllerFind( {filter: {where: {email}}})
                .then((result) => {
                    dispatch({ type: 'SET_LOGGED_IN_USER', loggedInUser: result[0] });
                })
                .catch(console.error);
        })();
    }, []);

    return {
        loading: !state.loggedInUser,
        data: state.loggedInUser
    }
}
