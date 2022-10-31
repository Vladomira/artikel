import axios, { AxiosRequestConfig } from "axios";
import { config } from "process";
import { setToLocalStorage } from "../../utils/helpers/auth/set-to-localstorage";
import { BASE_URL } from "./auth-login";

const apiInterceptor = axios.create({
    withCredentials: true,
    baseURL: process.env.NEXT_PUBLIC_DB,
});

apiInterceptor.interceptors.request.use((config: AxiosRequestConfig) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem(
        "accessToken"
    )}`;

    return config;
});
apiInterceptor.interceptors.response.use(
    (config) => {
        return config;
    },
    async (error) => {
        const originalRequest = error.config;

        if (
            error.response.status === 401 &&
            error.config &&
            !error.config._isRetry
        ) {
            originalRequest._isRetry = true;
            try {
                const response = await axios.post(`${BASE_URL}/auth/refresh`, {
                    refreshToken: localStorage.getItem("refreshToken"),
                });
                setToLocalStorage("accessToken", response.data.accessToken);
                setToLocalStorage("refreshToken", response.data.refreshToken);
                return apiInterceptor.request(originalRequest);
            } catch (error) {
                console.log("You are not authorized");
            }
        }
        throw error;
    }
);

export default apiInterceptor;
