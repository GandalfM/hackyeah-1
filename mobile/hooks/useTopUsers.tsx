import React, { useEffect, useState } from 'react';
import { GarbageBin } from "../client/src/models";
import {awardApi} from '../api';

export default (): { loading: boolean, data: GarbageBin[] } => {
    const [topUsers, setTopUsers] = useState(null);

    useEffect(() => {
        (async () => {
            awardApi.awardUserControllerGetTopTenUsers()
                .then((result) => {
                    setTopUsers(result);
                })
                .catch(console.error);
        })();
    }, []);

    return {
        loading: !topUsers,
        data: topUsers
    }
}
