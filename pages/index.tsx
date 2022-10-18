import { ActualArticles } from "../src/components/views/actual-articles";
import { ActualArticlesList } from "../src/components/views/art-section";
import { Header } from "../src/components/views/header";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <ActualArticles />
                <ActualArticlesList />
            </main>
        </>
    );
}
