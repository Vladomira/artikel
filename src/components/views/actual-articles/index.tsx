import { FC, useState } from "react";
import { PureHeader } from "../../headers/pure-header";
import { Section } from "../../section";

type ArticleItemProps = {
    category: string;
    genre: string;
    title: string;
    article: string;
    author: string;
    data: string;
    time: string;
    imgName: string;
};
// type ArticlesProps = {
//     articles: ArticleItemProps[];
// };
export const ActualArticles: FC = () => {
    const [articles, setArticles] = useState<ArticleItemProps[]>([]);
    // useEffect(() => {
    //     fetchChapter();
    // }, []);
    // useEffect(() => {
    //     return getChapters(chaptersData);
    // });
    const fetchChapter = async () => {
        try {
            const response = await fetch(
                `${process.env.DB_HOST}/actual-articles/`
            );

            // const response = await fetch("http://localhost:3000/api/chapters");
            const data = await response.json();

            // setChaptersData(data);
        } catch (error) {
            (error as Error).message || "Something went wrong";
        }
    };
    return (
        <Section paddingTop={156} paddingBottom={0} container>
            <PureHeader header={"Artikelen in de spotlights"} />
        </Section>
    );
};
