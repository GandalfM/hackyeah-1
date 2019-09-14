import React, { useEffect, useState } from 'react';
import { UserControllerApi } from '../client/src/apis';
import { User } from '../client/src/models';

const api = new UserControllerApi();

export default (): { loading: boolean, data: User } => {
    const [user, setLoggedInUser] = useState(null);

    useEffect(() => {
        (async () => {
            api.userControllerFind( {filter: {username: "zak"}})
                .then((result) => {
                    setLoggedInUser(result);
                })
                .catch(console.error);
        })();
    }, []);

    return {
        loading: !user,
        data: user
    }
}
