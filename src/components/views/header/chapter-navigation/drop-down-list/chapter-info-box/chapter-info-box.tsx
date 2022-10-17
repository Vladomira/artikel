import { FC } from "react";
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
