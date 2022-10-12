import { FC } from "react";
import { ChapterInfoHeader } from "../../../../../../headers/chapter-info-header";
import { Section } from "../../../../../../section";
import { TopicList } from "./topics-list";

type TopicListProps = {
    chapter: string;
    topics: string[];
};

export const TopicSection: FC<TopicListProps> = ({ topics, chapter }) => {
    return (
        <Section paddingTop={0} paddingBottom={40} minWidth="535px">
            <ChapterInfoHeader header={`Topics VOOR ${chapter}`} />
            <TopicList topics={topics} />
        </Section>
    );
};
