import axios, { AxiosRequestConfig } from "axios";

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
export default apiInterceptor;
