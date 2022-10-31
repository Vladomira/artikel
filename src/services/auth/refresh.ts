import axios, { AxiosInstance } from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import * as cookie from "cookie";
import { BASE_URL } from "./auth-login";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});

// export const fetchRefreshUser = (token: string): AxiosPromise<TokenData> => {
//   return axios.post(`${BASE_URL}/auth/refresh`, {
//       refreshToken: token,
//   });
// };

// axios.defaults.headers.common.Authorization = "";
export const toMakeRefresh = (token: string) => {
    return createAuthRefreshInterceptor(axiosInstance, (failedRequest) =>
        axios
            .post(
                `${BASE_URL}/auth/refresh`,
                {
                    refreshToken: token,
                }
                // { withCredentials: true }
            )
            .then((resp) => {
                if (axios.defaults.headers.common.cookie) {
                    axios.defaults.headers.common.cookie;
                }
                console.log("resp refresh", resp);

                const { accessToken } = resp.data;
                console.log("resp accessToken", accessToken);

                const bearer = `Bearer ${accessToken}`;
                axios.defaults.headers.common.Authorization = bearer;

                // // 3. Set up new refresh token as cookie
                const responseCookie = cookie.parse(
                    resp.headers["set-cookie"]
                )[0]; // 3a. We can't just acces it, we need to parse it first.
                // axiosInstance.defaults.headers.setCookie =
                resp.headers["set-cookie"]; // 3b. Set helper cookie for 'authorize.ts' Higher order Function.
                axios.defaults.headers.common.cookie = cookie.serialize(
                    responseCookie.name,
                    responseCookie.value
                );

                failedRequest.response.config.headers.Authorization = bearer;

                return Promise.resolve();
            })
    );
};

// export default axiosInstance;
