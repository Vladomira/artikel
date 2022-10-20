import { ActualArticles } from "../src/components/views/actual-articles";
import { ArtSection } from "../src/components/views/art-section";
import { Header } from "../src/components/views/header";
import { LastArticles } from "../src/components/views/last-articles";
import { PopularAuthors } from "../src/components/views/popular-authors";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <ActualArticles />
                <ArtSection />
                {/* <LastArticles /> */}
                <PopularAuthors />
            </main>
        </>
    );
}
