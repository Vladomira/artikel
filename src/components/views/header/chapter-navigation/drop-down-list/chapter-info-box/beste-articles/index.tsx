import { FC } from "react";
import { ChapterInfo } from "../../../../../../../context/chapters-context";
import { ArticleWithImg } from "../../../../../../article/chapter-with-img";
import { ChapterInfoHeader } from "../../../../../../headers/chapter-info-header";
import { Section } from "../../../../../../section";
import { WrapperBox } from "../../../../../../wrapper-box";
import { BestArticlesList } from "./best-articles-list";

export type BestArticlesProps = {
    chapter: string;
    best_of_chapter: ChapterInfo[];
    bigChapter: ChapterInfo;
};

export const BestArticlesSection: FC<BestArticlesProps> = ({
    chapter,
    best_of_chapter,
    bigChapter,
}) => {
    return (
        <Section
            paddingTop={0}
            paddingBottom={0}
            minWidth="535px"
            minHeight="350px"
        >
            <ChapterInfoHeader header={`Beste ${chapter} artikelen`} />
            <WrapperBox
                width="100%"
                justifyContent={!best_of_chapter ? "end" : ""}
            >
                <BestArticlesList
                    best_of_chapter={best_of_chapter}
                    chapter={chapter}
                />
                <ArticleWithImg bigChapter={bigChapter} chapter={chapter} />
            </WrapperBox>
        </Section>
    );
};
