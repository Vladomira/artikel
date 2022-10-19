import { FC, useEffect, useState } from "react";
import { ChapterInfoHeader } from "../../../headers/chapter-info-header";
import { WrapperBox } from "../../../wrapper-box";
import { MoreArticlesList } from "./more-articles-list";
import { MoreArticleWrapper } from "./more-articles-list/more-article.styles";

export type MoreArticleItem = {
    category: string;
    genre: string;
    title: string;
    author: string;
    data: string;
    time: string;
    imgName: string;
    views: number;
};

export const MoreArticles: FC = () => {
    const [articles, setArticles] = useState<MoreArticleItem[]>([]);

    useEffect(() => {
        fetchArticles().then((data: MoreArticleItem[]) => {
            const sorted = data?.sort((a, b) => b.views - a.views);
            setArticles(sorted.slice(0, 2));
        });
    }, []);

    const fetchArticles = async () => {
        try {
            const response = await fetch(
                "http://localhost:3000/api/more-articles"
            );
            const data = await response.json();
            return data;
        } catch (error) {
            (error as Error).message || "Something went wrong";
        }
    };
    return (
        <MoreArticleWrapper width="100%" direction="column" alignItems="end">
            <ChapterInfoHeader header={"Nog meer leestips"} noMarginBottom />

            <MoreArticlesList articles={articles} />
        </MoreArticleWrapper>
    );
};
