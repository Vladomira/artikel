import axios, { AxiosPromise } from "axios";
import React, { useState, PropsWithChildren, useEffect } from "react";

type User = {
    email: string;
    // name: string;
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
    logOut: () => void;
    error: boolean;
};
export const AuthContext = React.createContext<ContextType>({
    user: { email: "", password: "" }, //name: "",
    createUser: () => {},
    registerUser: async () => Promise,
    loginUser: async () => Promise,
    isLoggedIn: false,
    changeIsLoggedIn: () => {},
    logOut: () => {},
    error: false,
});
const initUser = {
    // name: "Olio",
    email: "",
    password: "",
};

const BASE_URL = "http://localhost:4200";

const setAuthHeader = (token: string) => {
    return (axios.defaults.headers.common.Authorization = `Bearer ${token}`);
};
const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = "";
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

    const registerUser = async (
        email: string,
        password: string
    ): Promise<TokenData> => {
        try {
            const { data } = await axios
                .post(`${BASE_URL}/auth/sign-up`, {
                    email,
                    password,
                })
                .catch((error) => {
                    setError(true);
                    setIsLoggedIn(false);
                    alert(error.message);
                    return error;
                });

            if (data!) {
                const { accessToken, refreshToken } = data;
                setAuthHeader(data.accessToken);

                localStorage.setItem(
                    "accessToken",
                    JSON.stringify(accessToken)
                );
                localStorage.setItem(
                    "refreshToken",
                    JSON.stringify(refreshToken)
                );
                setIsLoggedIn(true);
            }
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
            const { data } = await axios
                .post(`${BASE_URL}/auth/sign-in`, {
                    email,
                    password,
                })
                .catch((error) => {
                    setError(true);
                    setIsLoggedIn(false);
                    alert(error.message);
                    return error;
                });

            if (data) {
                const { accessToken, refreshToken } = data;
                localStorage.setItem(
                    "accessToken",
                    JSON.stringify(accessToken)
                );
                localStorage.setItem(
                    "refreshToken",
                    JSON.stringify(refreshToken)
                );
                setIsLoggedIn(true);
                setAuthHeader(data.accessToken);
                return data;
            }
        } catch (error) {
            setError(true);
            setIsLoggedIn(false);
            alert((error as Error).message);
        }
    };

    const logOut = async (): Promise<any> => {
        try {
            localStorage.setItem("accessToken", "");
            localStorage.setItem("refreshToken", "");
            setIsLoggedIn(false);
            clearAuthHeader();
        } catch (error) {
            setError(true);
            setIsLoggedIn(false);
            alert((error as Error).message);
        }
    };
    useEffect(() => {
        const getRefresh = localStorage.getItem("refreshToken");
        if (getRefresh) {
            const refreshToken = JSON.parse(getRefresh);
            refreshToken && getRefreshData(refreshToken);

            const secondAccess = JSON.parse(
                localStorage.getItem("accessToken")
            );
            const secondRefresh = JSON.parse(
                localStorage.getItem("refreshToken")
            );

            if (secondAccess && secondRefresh) setIsLoggedIn(true);
        }
    }, []);

    const getRefreshData = async (refresh: string): Promise<TokenData> => {
        if (!refresh) {
            return;
        }
        try {
            const { data } = await axios.post(`${BASE_URL}/auth/refresh`, {
                refreshToken: refresh,
            });
            const { accessToken, refreshToken } = data;
            localStorage.setItem("accessToken", JSON.stringify(accessToken));
            localStorage.setItem("refreshToken", JSON.stringify(refreshToken));
            return data;
        } catch (error) {
            setError(true);
            alert((error as Error).message);
        }
    };

    const getCurrentUser = async () => {
        const getAccess = localStorage.getItem("accessToken");
        if (getAccess) {
            const accessToken = JSON.parse(getAccess);

            if (!accessToken) return;

            setAuthHeader(accessToken);

            try {
                const { data } = await axios.get(`${BASE_URL}/user/me`);
                return data;
            } catch (error) {
                alert((error as Error).message);
            }
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
                logOut,
                error,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
