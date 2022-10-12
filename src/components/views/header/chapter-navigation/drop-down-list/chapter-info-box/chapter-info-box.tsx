import { FC } from "react";
import { BestArticlesSection } from "./beste-articles";
import { TopicSection } from "./topic-section";
import { ChapterInfo } from "../../../../../../context/chapters-context";
import { ChapterInfoBox } from "./chapter-info-box.styles";

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
        <ChapterInfoBox
            direction="column"
            width="100%"
            maxWidth={886}
            padding="24px 0px 0px 35px"
        >
            <TopicSection chapter={chapter} topics={topics} />
            <BestArticlesSection
                chapter={chapter}
                best_of_chapter={best_of_chapter}
                bigChapter={bigChapter}
            />
        </ChapterInfoBox>
    );
};
