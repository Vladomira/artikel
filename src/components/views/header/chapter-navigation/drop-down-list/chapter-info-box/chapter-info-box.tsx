import { FC, useEffect, useState } from "react";
import { BestArticlesSection } from "./beste-articles";
import { TopicSection } from "./topic-section";
import { ChapterInfo } from "../../../../../../context/chapters-context";
import { WrapperBox } from "../../../../../wrapper-box";

export type ChapterInfoBoxProps = {
    topics: string[];
    chapter: string;
    best_of_chapter: ChapterInfo[];
    bigChapter: ChapterInfo;
};
export const ChapterInfoComponent: FC<ChapterInfoBoxProps> = ({
    topics,
    chapter,
    best_of_chapter,
    bigChapter,
}) => {
    //
    // const [bestArticles, setBestArticles] = useState<ChapterInfo[]>([]);
    // const [gratestArticle, setGratestArticler] = useState<ChapterInfo>();
    // console.log("best_of_chapter", best_of_chapter);

    // console.log("best_of_chapter", best_of_chapter);
    // useEffect(() => {
    //     const best = best_of_chapter.reduce((prev, next): ChapterInfo => {
    //         prev.views > next.views
    //             ? (setGratestArticler(prev), bestArticles.push(prev))
    //             : (setGratestArticler(next), bestArticles.push(next));

    //         return prev;
    //     });
    // console.log("bestArticles", bestArticles);
    // const sortByViews = best_of_chapter.sort((a, b) => b.views - a.views);

    // const best = best_of_chapter.splice(0, 1);
    // console.log("besrt", best);

    // setGratestArticler(best);
    // setCount(+1);
    // console.log("count", count);

    // const articles = sortByViews.splice(1, 3);
    // console.log("articles", articles);
    // setBestArticles(articles);
    // });
    // console.log("gratestArticle", gratestArticle);

    return (
        <WrapperBox
            direction="column"
            maxWidth={886}
            width="100%"
            padding="24px 0px 0px 35px"
        >
            <TopicSection chapter={chapter} topics={topics} />
            <BestArticlesSection
                chapter={chapter}
                best_of_chapter={best_of_chapter}
                bigChapter={bigChapter}
            />
        </WrapperBox>
    );
};
