import React, {useEffect, useState} from 'react';
import {awardApi} from '../api';

interface TopUser {
    points: number,
    userId: string
    username: string,
    avatarUrl: string,
    email: string
}

export default (): { loading: boolean, data: Array<TopUser>} => {
    const [topUsers, setTopUsers] = useState(null);
    useEffect(() => {
        (async () => {
            awardApi.awardUserControllerGetTopTenUsers()
                .then((result) => {
                    setTopUsers(result);
                }, (error: any) => console.log(error))
                .catch(console.error);
        })();
    }, []);

    return {
        loading: !topUsers,
        data: topUsers
    }
}
