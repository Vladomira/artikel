import { AuthProvider } from "../src/context/auth-context";
import { ChaptersProvider } from "../src/context/chapters-context";
import { GlobalStyle } from "../styles/global-style";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <>
            <GlobalStyle />
            <AuthProvider>
                <ChaptersProvider>
                    <Component {...pageProps} />
                </ChaptersProvider>{" "}
            </AuthProvider>
        </>
    );
}

export default MyApp;
