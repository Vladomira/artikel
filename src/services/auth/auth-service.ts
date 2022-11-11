import { AxiosResponse, AxiosPromise } from "axios";
import { AuthResponse } from "../../models/response/AuthResponse";
import { FullUser } from "../../models/response/FullUser";
import apiInterceptor from "./interseptor";

export const BASE_URL = process.env.NEXT_PUBLIC_DB;

export default class AuthService {
    static login(
        email: string,
        password: string
    ): Promise<AxiosResponse<AuthResponse>> {
        return apiInterceptor.post<AuthResponse>(`${BASE_URL}/auth/sign-in`, {
            email,
            password,
        });
    }

    static async register(
        email: string,
        password: string
    ): Promise<AxiosResponse<AuthResponse>> {
        return apiInterceptor.post(`${BASE_URL}/auth/sign-up`, {
            email,
            password,
        });
    }
    static async getCurrentUser(): Promise<AxiosPromise<FullUser>> {
        return apiInterceptor.get<FullUser>(`${BASE_URL}/user/me`);
    }
}
