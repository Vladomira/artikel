import { AxiosResponse } from "axios";
import { AuthResponse } from "../../models/response/AuthResponse";
import { BASE_URL } from "./auth-login";
import apiInterceptor from "./interseptor";

export const fetchRegisterUser = (
    email: string,
    password: string
): Promise<AxiosResponse<AuthResponse>> => {
    return apiInterceptor.post<AuthResponse>(`${BASE_URL}/auth/sign-up`, {
        email,
        password,
    });
};
