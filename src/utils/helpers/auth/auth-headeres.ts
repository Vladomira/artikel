import axios from "axios";

export const setAuthHeader = (token: string) => {
    return (axios.defaults.headers.common.Authorization = `Bearer ${token}`);
};
export const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = "";
};
