import React, { useState, PropsWithChildren, useEffect } from "react";
import { AuthResponse } from "../models/response/AuthResponse";
import { fetchCurrentUser } from "../services/auth/auth-get-current";
import { fetchLoginUser, TokenData } from "../services/auth/auth-login";
import { fetchRefreshUser } from "../services/auth/auth-refresh";
import { fetchRegisterUser } from "../services/auth/auth-register";
import {
    clearAuthHeader,
    setAuthHeader,
} from "../utils/helpers/auth/auth-headeres";
import { setToLocalStorage } from "../utils/helpers/auth/set-to-localstorage";

type User = {
    email: string;
    // name: string;
    password: string;
};

type ContextType = {
    user: User;
    createUser: (email: string, password: string) => void;
    registerUser: (email: string, password: string) => Promise<any>;
    loginUser: (email: string, password: string) => Promise<any>;
    isLoggedIn: boolean;
    changeIsLoggedIn: (prop: boolean) => void;
    logOut: () => void;
    error: string;
    createError: (prop: string) => void;
};
export const AuthContext = React.createContext<ContextType>({
    user: { email: "", password: "" }, //name: "",
    createUser: () => {},
    registerUser: async () => Promise,
    loginUser: async () => Promise,
    isLoggedIn: false,
    changeIsLoggedIn: () => {},
    logOut: () => {},
    error: "",
    createError: () => {},
});
const initUser = {
    // name: "Olio",
    email: "",
    password: "",
};

enum ErrorsTypes {
    LOGIN = "This user doesn't exist. Try again",
    REGISTER = "This user exists",
    WRONG = "Something went wrong.",
    REFRESH = "Unable to fetch user",
}

export const AuthProvider = ({ children }: PropsWithChildren) => {
    const [user, setUser] = useState<User>(initUser);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState("");

    const createUser = (email: string, password: string) =>
        setUser({
            email,
            password,
        });

    const loginUser = async (
        email: string,
        password: string
    ): Promise<AuthResponse> => {
        const response = await fetchLoginUser(email, password).catch(
            (error) => {
                setError(ErrorsTypes.LOGIN);
                setIsLoggedIn(false);
                return error;
            }
        );
        if (response.data !== undefined) {
            const { accessToken, refreshToken } = response.data;
            setToLocalStorage("accessToken", accessToken);
            setToLocalStorage("refreshToken", refreshToken);
            setIsLoggedIn(true);
            return response.data;
        }
        return response.data;
    };

    const changeIsLoggedIn = (prop: boolean) => setIsLoggedIn(prop);

    const registerUser = async (
        email: string,
        password: string
    ): Promise<TokenData> => {
        try {
            const response = await fetchRegisterUser(email, password).catch(
                (error) => {
                    setError(ErrorsTypes.REGISTER);
                    setIsLoggedIn(false);
                    return error;
                }
            );

            if (response.data !== undefined) {
                const { accessToken, refreshToken } = response.data;

                setToLocalStorage("accessToken", accessToken);
                setToLocalStorage("refreshToken", refreshToken);
                setIsLoggedIn(true);
                return response.data;
            }
        } catch (error) {
            setError(ErrorsTypes.WRONG);
            setIsLoggedIn(false);
            return error;
        }
    };

    const logOut = () => {
        try {
            localStorage.setItem("accessToken", "");
            localStorage.setItem("refreshToken", "");
            setIsLoggedIn(false);
            clearAuthHeader();
        } catch (error) {
            setError(ErrorsTypes.WRONG);
            setIsLoggedIn(false);
            alert((error as Error).message);
        }
    };
    useEffect(() => {
        const getRefresh = localStorage.getItem("refreshToken");

        if (getRefresh) {
            const refreshToken = JSON.parse(getRefresh);
            refreshToken && getRefreshData(refreshToken);

            const secondAccess = localStorage.getItem("accessToken");
            const secondRefresh = localStorage.getItem("refreshToken");

            if (secondAccess && secondRefresh) setIsLoggedIn(true);
        }
    }, []);

    const getRefreshData = async (
        refresh: string
    ): Promise<TokenData | string> => {
        if (!refresh) {
            return ErrorsTypes.REFRESH;
        }

        try {
            const { data } = await fetchRefreshUser(refresh);
            const { accessToken, refreshToken } = data;

            if (accessToken && refreshToken) setIsLoggedIn(true);

            setToLocalStorage("accessToken", accessToken);
            setToLocalStorage("refreshToken", refreshToken);
            return data;
        } catch (error) {
            return (error as Error).message || "Something went wrong";
        }
    };

    const getCurrentUser = async () => {
        const getToken = localStorage.getItem("refreshToken");

        if (getToken) {
            const token = JSON.parse(getToken);

            if (!token) return;

            token && setAuthHeader(token);

            try {
                const { data } = await fetchCurrentUser();
                setIsLoggedIn(true);
                setUser({ email: data.email, password: "" });
                return data;
            } catch (error) {
                return error.message;
            }
        }
    };

    useEffect(() => {
        const access = localStorage.getItem("accessToken");
        const refresh = localStorage.getItem("refreshToken");
        if (access || refresh) setIsLoggedIn(true);
        getCurrentUser();
    }, []);

    const createError = (str: string) => setError(str);

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
                createError,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
