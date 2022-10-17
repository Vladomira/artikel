import { ActualArticles } from "../src/components/views/actual-articles";
import { Header } from "../src/components/views/header";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <ActualArticles />
            </main>
        </>
    );
}
