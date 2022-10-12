import { ChaptersProvider } from "../src/context/chapters-context";
import { GlobalStyle } from "../styles/global-style";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <ChaptersProvider>
                <Component {...pageProps} />
            </ChaptersProvider>
        </>
    );
}

export default MyApp;
