import { AxiosResponse } from "axios";
import React, { useState, PropsWithChildren, useEffect } from "react";
import { AuthResponse } from "../models/response/AuthResponse";
import AuthService from "../services/auth/auth-service";
import { clearAuthHeader } from "../utils/helpers/auth/auth-headeres";
import {
    setKeysToLocalStorage,
    setToLocalStorage,
} from "../utils/helpers/auth/set-to-localstorage";
import { initUser, TokenData, User } from "../utils/prop-types/auth";

type ContextType = {
    user: User;
    registerUser: (
        email: string,
        password: string
    ) => Promise<any | AuthResponse>;
    loginUser: (email: string, password: string) => Promise<any | AuthResponse>;
    isLoggedIn: boolean;
    changeIsLoggedIn: (prop: boolean) => void;
    logOut: () => void;
    error: string;
    createError: (prop: string) => void;
    isLoading: boolean;
};
export const AuthContext = React.createContext<ContextType>({
    user: initUser,
    registerUser: async () => Promise,
    loginUser: async () => Promise,
    isLoggedIn: false,
    changeIsLoggedIn: () => {},
    logOut: () => {},
    error: "",
    createError: () => {},
    isLoading: false,
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
    const [user, setUser] = useState<User>(initUser);
    const [tokenData, setTokenData] = useState<TokenData>({
        access: "",
        refresh: "",
    });
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const changeIsLoading = (prop: boolean) => setIsLoading(prop);

    const loginUser = async (
        email: string,
        password: string
    ): Promise<AxiosResponse<AuthResponse>> => {
        try {
            const response = await AuthService.login(email, password);
            const { accessToken, refreshToken } = response.data;
            setToLocalStorage("accessToken", accessToken);
            setToLocalStorage("refreshToken", refreshToken);
            setTokenData({ access: accessToken, refresh: refreshToken });
            return response;
        } catch (error) {
            setIsLoggedIn(false);
            setError(error.response?.data?.err);
        }
    };
    const registerUser = async (
        email: string,
        password: string
    ): Promise<AxiosResponse<AuthResponse>> => {
        try {
            const response = await AuthService.register(email, password);

            setKeysToLocalStorage(response.data);
            setTokenData({
                access: response.data.accessToken,
                refresh: response.data.refreshToken,
            });
            return response;
        } catch (error) {
            setIsLoggedIn(false);
            setError(error.response?.data?.err);
        }
    };

    const logOut = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        setIsLoggedIn(false);
        setUser({ email: "" });
        clearAuthHeader();
    };
    const getCurrentUser = async () => {
        changeIsLoading(true);
        if (!tokenData.access) return;

        if (tokenData.access) {
            try {
                const { data } = await AuthService.getCurrentUser();

                setIsLoggedIn(true);
                setUser({ email: data.email });
                return data;
            } catch (error) {
                return error.message;
            } finally {
                changeIsLoading(false);
            }
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        const refresh = localStorage.getItem("refreshToken");
        setTokenData({
            access: token,
            refresh: refresh,
        });
    }, []);
    useEffect(() => {
        getCurrentUser();
    }, [tokenData]);

    const createError = (str: string) => setError(str);
    const changeIsLoggedIn = (prop: boolean) => setIsLoggedIn(prop);
    return (
        <AuthContext.Provider
            value={{
                user,
                registerUser,
                isLoggedIn,
                changeIsLoggedIn,
                loginUser,
                logOut,
                error,
                createError,
                isLoading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
