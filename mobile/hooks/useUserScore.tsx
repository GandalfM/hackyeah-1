import React, { useEffect, useState } from 'react';
import { awardApi } from '../api';
import { useStateValue } from "../context/state";

interface TopUser {
    points: number,
    userId: string
    username: string,
    avatarUrl: string,
    email: string
}

export default () => {
    const [userSummary, setUserSummary] = useState(null);
    const [state, dispatch] = useStateValue();
    useEffect(() => {
        (async () => {
            awardApi.awardUserControllerGetUserSummary({id: parseInt(state.loggedInUser.id)})
                .then((result) => {
                    setUserSummary(result);
                    console.log(result);
                }, error => console.log(error))
                .catch(console.error);
        })();
    }, []);

    return {
        loading: !userSummary,
        data: userSummary
    }
}
