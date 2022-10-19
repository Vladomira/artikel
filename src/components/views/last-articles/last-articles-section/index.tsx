import { FC, useEffect, useState } from "react";
import { ChapterInfoHeader } from "../../../headers/chapter-info-header";
import { WrapperBox } from "../../../wrapper-box";
import { HeaderIcon } from "../../../headers/header-arrow/header-icon";
import { LastArticlesList } from "./last-articles-list";
import { GratestArticle } from "./gratest-article";
import Link from "next/link";

export type LastArticleItemProps = {
    category: string;
    genre: string;
    title: string;
    article?: string;
    author: string;
    data: string;
    time: string;
    imgName: string;
    views?: number;
};

export const LastArticlesSection: FC = () => {
    const [articles, setArticles] = useState<LastArticleItemProps[]>([]);
    const [gratestArticle, setGratestArticle] =
        useState<LastArticleItemProps>();

    useEffect(() => {
        fetchArticles().then((data: LastArticleItemProps[]) => {
            const sorted = data?.sort((a, b) => b.views - a.views);
            setGratestArticle(sorted[0]);
            setArticles(sorted.slice(1, 5));
        });
    }, []);

    const fetchArticles = async () => {
        try {
            const response = await fetch(
                "http://localhost:3000/api/last-articles"
            );
            const data = await response.json();
            return data;
        } catch (error) {
            (error as Error).message || "Something went wrong";
        }
    };
    return (
        <WrapperBox width="100%" direction="column">
            <Link href="">
                <a>
                    <ChapterInfoHeader
                        header={"Laatste artikelen"}
                        noMarginBottom
                    >
                        &nbsp; <HeaderIcon />
                    </ChapterInfoHeader>
                </a>
            </Link>
            {gratestArticle && (
                <GratestArticle gratestArticle={gratestArticle} />
            )}
            {articles && <LastArticlesList articles={articles} />}
        </WrapperBox>
    );
};
