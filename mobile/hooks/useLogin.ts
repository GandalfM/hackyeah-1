import React, { useEffect, useState } from 'react';
import { UserControllerApi } from '../client/src/apis';
import { User } from '../client/src/models';
import { AuthSession } from 'expo';
import { useStateValue } from "../context/state";
import jwtDecode from 'jwt-decode';
import { AsyncStorage, Alert } from 'react-native';

const api = new UserControllerApi();

const STORAGE_KEY = 'userEmail';

const auth0ClientId = 'z0xf5rQ202MwtZfn77eHm1YX0RyGF1c9';
const auth0Domain = 'https://garbage-locator.eu.auth0.com';


export default (): { loading: boolean, isLogged: boolean, data: User, login: () => void, logout: () => void } => {
    const [state, dispatch] = useStateValue();

    function toQueryString(params) {
        return '?' + Object.keys(params)
            .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
            .join('&');
    }

    const handleResponse = (response): { name: string } => {
        if (response.error) {
            console.error('Authentication error', response.error_description || 'something went wrong');
            return;
        }

        // Retrieve the JWT token and decode it
        const jwtToken = response.id_token;
        const decoded = jwtDecode(jwtToken);

        return decoded;
    };


    const login = async () => {
        // Retrieve the redirect URL, add this to the callback URL list
        // of your Auth0 application.
        const redirectUrl = AuthSession.getRedirectUrl();
        console.log(`Redirect URL: ${redirectUrl}`);

        // Structure the auth parameters and URL
        const queryParams = toQueryString({
            client_id: auth0ClientId,
            redirect_uri: redirectUrl,
            response_type: 'id_token', // id_token will return a JWT token
            scope: 'openid profile', // retrieve the user's profile
            nonce: 'nonce', // ideally, this will be a random value
        });
        const authUrl = `${auth0Domain}/authorize` + queryParams;

        // Perform the authentication
        const response = await AuthSession.startAsync({ authUrl });
        console.log('Authentication response', response);

        if (response.type === 'success') {
            return handleResponse(response.params);
        }

        throw new Error("Can't authorise");
    };

    const createUserIfDoesNotExist = async (email) => {
        const user = await api.userControllerFind({ filter: { where: { email } } })
        if (user && user[0]) {
            return user[0];
        }

        return api.userControllerCreate({
            userExcludingId: {
                email: email,
                username: email,
            }
        })
    }

    const handleUserCreationAndInitialisation = async (email) => {
        const user = await createUserIfDoesNotExist(email);
        dispatch({ type: 'SET_LOGGED_IN_USER', loggedInUser: user });
        await AsyncStorage.setItem(STORAGE_KEY, email);
    }

    useEffect(() => {
        (async () => {
            if (state.isUserLogged) {
                return;
            }

            try {
                const value = await AsyncStorage.getItem(STORAGE_KEY)
                if (!!value) {
                    handleUserCreationAndInitialisation(value);
                }
            }
            finally {
            }
        })();
    }, []);

    return {
        loading: state.isUserLogged === null,
        login: () => {
            Alert.alert("You need to click in X button manually", "Due to the limitations of react native after succesfull login you need to click on the X button manually - you'll be logged in sucesfully",
                [{
                    text: "OK",
                    onPress: () => {
                        (async () => {
                            const data = await login();
                            await handleUserCreationAndInitialisation(data.name);
                        })();
                    }
                }]
            );
        },
        logout: () => {
            Alert.alert("You need to click in X button manually", "Due to the limitations of react native after succesfull log out you need to click on the X button manually - you'll be log out sucesfully",
                [{
                    text: "OK",
                    onPress: () => {
                        (async () => {

                            const redirectUrl = AuthSession.getRedirectUrl();
                            console.log(`Redirect URL: ${redirectUrl}`);

                            // Structure the auth parameters and URL
                            const queryParams = toQueryString({
                                client_id: auth0ClientId,
                                returnTo: redirectUrl
                            });
                            const authUrl = `${auth0Domain}/v2/logout` + queryParams;

                            await AuthSession.startAsync({ authUrl }); console.log('bla4')
                            await AsyncStorage.removeItem(STORAGE_KEY);
                            dispatch({ type: 'SET_LOGGED_IN_USER', loggedInUser: null });
                        })();
                    }
                }]
            );

        },
        isLogged: !!state.isUserLogged,
        data: state.loggedInUser
    }
}
