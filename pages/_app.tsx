import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";
import { AuthContext, AuthProvider } from "../src/context/auth-context";
import { ChaptersProvider } from "../src/context/chapters-context";
import { GlobalStyle } from "../styles/global-style";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <>
            {/* <SessionProvider session={session}> */}
            <GlobalStyle />
            <AuthProvider>
                <ChaptersProvider>
                    <Component {...pageProps} />
                </ChaptersProvider>{" "}
            </AuthProvider>
            {/* </SessionProvider> */}
        </>
    );
}

export default MyApp;
