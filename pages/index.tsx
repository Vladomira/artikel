import { fetchBottomChapters } from "../src/api/chapters-bottom-request";
import { ActualArticles } from "../src/components/views/actual-articles";
import { ArtSection } from "../src/components/views/art-section";
import { BottomNav } from "../src/components/views/bottom-navigation";
import { Header } from "../src/components/views/header";
import { FooterInfo } from "../src/components/views/info-footer";
import { LastArticles } from "../src/components/views/last-articles";
import { PopularAuthors } from "../src/components/views/popular-authors";
import { AuthContext } from "../src/context/auth-context";

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

// export const getServerSideProps = withSession(async function ({ req, res }) {
//     const { user } = req.session

//     if (!user) {
//       return {
//         redirect: {
//           destination: '/login',
//           permanent: false,
//         },
//       }
//     }

//     return {
//       props: { user },
//     }
//   })
export const getServerSideProps = async (): Promise<{
    props: {
        chapters: {};
        error?: string;
        // session: Session;
    };
}> => {
    try {
        const { data } = await fetchBottomChapters();

        return {
            props: {
                chapters: data,
                error: "",
                // session: await unstable_getServerSession(
                //     context.req,
                //     context.res
                //     // authOptions
                // ),
            },
        };
    } catch (error) {
        return {
            props: {
                chapters: {},
                error: (error as Error).message || "Something went wrong",
                // session: await unstable_getServerSession(
                //     context.req,
                //     context.res
                //     // authOptions
                // ),
            },
        };
    }
};
