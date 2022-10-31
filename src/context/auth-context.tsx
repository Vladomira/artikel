import React, { useState, PropsWithChildren, useEffect } from "react";
import { AuthResponse } from "../models/response/AuthResponse";
import { fetchCurrentUser } from "../services/auth/auth-get-current";
import { fetchLoginUser } from "../services/auth/auth-login";
import { fetchRegisterUser } from "../services/auth/auth-register";
import { clearAuthHeader } from "../utils/helpers/auth/auth-headeres";
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
    isLoading: boolean;
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
    isLoading: false,
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
    const [isLoading, setIsLoading] = useState(false);

    const changeIsLoading = (prop: boolean) => setIsLoading(prop);
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
    ): Promise<AuthResponse> => {
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
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            setIsLoggedIn(false);
            setUser({ email: "", password: "" });
            clearAuthHeader();
        } catch (error) {
            setError(ErrorsTypes.WRONG);
            setIsLoggedIn(false);
            alert((error as Error).message);
        }
    };

    const getCurrentUser = async () => {
        changeIsLoading(true);
        const token = localStorage.getItem("accessToken");
        if (!token) return;

        if (token) {
            try {
                const { data } = await fetchCurrentUser();
                setIsLoggedIn(true);
                setUser({ email: data.email, password: "" });
                return data;
            } catch (error) {
                return error.message;
            } finally {
                changeIsLoading(false);
            }
        }
    };

    useEffect(() => {
        const access = localStorage.getItem("accessToken");
        const refresh = localStorage.getItem("refreshToken");
        if (access || refresh) setIsLoggedIn(true);
        access && refresh && getCurrentUser();
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
                isLoading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
