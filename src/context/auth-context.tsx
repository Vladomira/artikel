import axios, { AxiosPromise } from "axios";
import React, { useState, PropsWithChildren, useEffect } from "react";

type User = {
    email: string;
    // name: string;
    password: string;
};
type UserPost = {
    email: string;
    password: string;
};
type TokenData = {
    accessToken: string | null;
    refreshToken: string | null;
};

type ContextType = {
    user: User;
    createUser: (email: string, password: string) => void;
    registerUser: (email: string, password: string) => Promise<any>;
    loginUser: (email: string, password: string) => Promise<any>;
    isLoggedIn: boolean;
    changeIsLoggedIn: (prop: boolean) => void;
    error: boolean;
};
export const AuthContext = React.createContext<ContextType>({
    user: { email: "", password: "" }, //name: "",
    createUser: () => {},
    registerUser: async () => Promise,
    loginUser: async () => Promise,
    isLoggedIn: false,
    changeIsLoggedIn: () => {},
    error: false,
});
const initUser = {
    // name: "Olio",
    email: "",
    password: "",
};
const initTokenData = {
    accessToken: null,
    refreshToken: null,
};
const BASE_URL = "http://localhost:4200";

const setAuthHeader = (token: string) => {
    return (axios.defaults.headers.common.Authorization = `Bearer ${token}`);
};
export const AuthProvider = ({ children }: PropsWithChildren) => {
    const [user, setUser] = useState<User>(initUser);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState(false);

    const createUser = (email: string, password: string) =>
        setUser({
            email,
            password,
            // name,
        });

    const changeIsLoggedIn = (prop: boolean) => setIsLoggedIn(prop);
    useEffect(() => {
        const refreshToken = JSON.parse(localStorage.getItem("refreshToken"));
        const accessToken = JSON.parse(localStorage.getItem("accessToken"));
        if (refreshToken || accessToken) setIsLoggedIn(true);
    }, []);
    const registerUser = async (
        email: string,
        password: string
    ): Promise<TokenData> => {
        try {
            const { data } = await axios.post(`${BASE_URL}/auth/sign-up`, {
                email,
                password,
            });
            const { accessToken, refreshToken } = data;
            setAuthHeader(data.accessToken);

            localStorage.setItem("accessToken", JSON.stringify(accessToken));
            localStorage.setItem("refreshToken", JSON.stringify(refreshToken));
            setIsLoggedIn(true);

            return data;
        } catch (error) {
            setError(true);
            alert((error as Error).message);
        }
    };

    const loginUser = async (
        email: string,
        password: string
    ): Promise<TokenData> => {
        try {
            const { data } = await axios.post(`${BASE_URL}/auth/sign-in`, {
                email,
                password,
            });
            const { accessToken, refreshToken } = data;
            setAuthHeader(data.accessToken);

            localStorage.setItem("accessToken", JSON.stringify(accessToken));
            localStorage.setItem("refreshToken", JSON.stringify(refreshToken));
            setIsLoggedIn(true);
            return data;
        } catch (error) {
            setError(true);
            alert((error as Error).message);
        }
    };

    const getRefreshData = async (): Promise<TokenData> => {
        const refreshToken = JSON.parse(localStorage.getItem("refreshToken"));
        if (!refreshToken) {
            return;
        }
        try {
            const { data } = await axios.post(`${BASE_URL}/auth/refresh`, {
                refreshToken: refreshToken,
            });
            return data;
        } catch (error) {
            alert((error as Error).message);
        }
    };

    const getCurrentUser = async () => {
        const accessToken = JSON.parse(localStorage.getItem("accessToken"));

        if (!accessToken) return;
        setAuthHeader(accessToken);

        try {
            const { data } = await axios.get(`${BASE_URL}/user/me`);
            return data;
        } catch (error) {
            alert((error as Error).message);
        }
    };

    useEffect(() => {
        getCurrentUser();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                createUser,
                registerUser,
                isLoggedIn,
                changeIsLoggedIn,
                loginUser,
                error,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
