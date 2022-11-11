import { AuthResponse } from "../../../models/response/AuthResponse";

export const setToLocalStorage = (key: string, data: string) => {
    return localStorage.setItem(key, JSON.stringify(data));
};
export const setKeysToLocalStorage = (data: AuthResponse) => {
    const { accessToken, refreshToken } = data;
    return (
        localStorage.setItem("accessToken", JSON.stringify(accessToken)),
        localStorage.setItem("refreshToken", JSON.stringify(refreshToken))
    );
};
