import axios, { AxiosPromise } from "axios";
const BASE_URL = "http://localhost:4000/";
type UserPost = {
    email: string;
    password: string;
};
export function createUser(
    email: string,
    password: string
): AxiosPromise<UserPost> {
    return axios.get(`${BASE_URL}/auth/sign-up`, {
        // email,
        // password,
    });
}
