import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { fetchBottomChapters } from "../src/api/chapters-bottom-request";
import { ActualArticles } from "../src/components/views/actual-articles";
import { ArtSection } from "../src/components/views/art-section";
import { BottomNav } from "../src/components/views/bottom-navigation";
import { Header } from "../src/components/views/header";
import { FooterInfo } from "../src/components/views/info-footer";
import { LastArticles } from "../src/components/views/last-articles";
import { PopularAuthors } from "../src/components/views/popular-authors";

export default function Home({ chapters }) {
    return (
        <>
            <Header />
            <main>
                <ActualArticles />
                <ArtSection />
                <LastArticles />
                <PopularAuthors />
                <BottomNav chapters={chapters} />
                <FooterInfo />
            </main>
        </>
    );
}

export const getServerSideProps = async (): Promise<{
    props: {
        chapters: {};
        error?: string;
    };
}> => {
    try {
        const { data } = await fetchBottomChapters();

        return {
            props: {
                chapters: data,
                error: "",
            },
        };
    } catch (error) {
        return {
            props: {
                chapters: {},
                error: (error as Error).message || "Something went wrong",
            },
        };
    }
};
