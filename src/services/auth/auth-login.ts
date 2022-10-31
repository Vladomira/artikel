import { AxiosResponse } from "axios";
import { AuthResponse } from "../../models/response/AuthResponse";
import apiInterceptor from "./interseptor";

export const BASE_URL = process.env.NEXT_PUBLIC_DB;

export const fetchLoginUser = (
    email: string,
    password: string
): Promise<AxiosResponse<AuthResponse>> => {
    return apiInterceptor.post<AuthResponse>(`${BASE_URL}/auth/sign-in`, {
        email,
        password,
    });
};
