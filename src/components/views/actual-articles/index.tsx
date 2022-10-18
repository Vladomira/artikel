import { FC, SyntheticEvent, useEffect, useState } from "react";
import { Colors } from "../../../utils/colors";
import { PureHeader } from "../../headers/pure-header";
import { Section } from "../../section";
import { WrapperBox } from "../../wrapper-box";
import { ActualArticlesList } from "./actual-items-list";

export type ArticleItemProps = {
    category: string;
    genre: string;
    title: string;
    article: string;
    author: string;
    data: string;
    time: string;
    imgName: string;
};
export const ActualArticles: FC = () => {
    const [articles, setArticles] = useState<ArticleItemProps[]>([]);

    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        try {
            // const response = await fetch(  `${process.env.API_HOST}/api/actual-articles/` );
            const response = await fetch(
                "http://localhost:3000/api/actual-articles"
            );
            const data = await response.json();

            setArticles(data);
        } catch (error) {
            (error as Error).message || "Something went wrong";
        }
    };

    return (
        <Section paddingTop={64} marginTop={92} paddingBottom={0} width="100%">
            <WrapperBox padding="0px 16px" justifyContent="center">
                <WrapperBox maxWidth={1160} direction="column" width="100%">
                    <WrapperBox
                        borderBottom={`8px solid ${Colors.BLACK}`}
                        width="100%"
                        padding="0px 0px 8px 0px"
                    >
                        <PureHeader header={"Artikelen in de spotlights"} />
                    </WrapperBox>

                    <ActualArticlesList articles={articles} />
                </WrapperBox>
            </WrapperBox>
        </Section>
    );
};
