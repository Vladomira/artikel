import { FC } from "react";
import { ChapterInfo } from "../../../../../../../context/chapters-context";
import { List } from "../../../../../../list";
import { BestArticlesItem } from "./best-articles-item";

type TopicListProps = {
    best_of_chapter: ChapterInfo[];
    chapter: string;
};

export const BestArticlesList: FC<TopicListProps> = ({
    best_of_chapter,
    chapter,
}) => {
    console.log("list", best_of_chapter);

    return (
        <List overflow="unset" minWidth={!best_of_chapter ? "355px" : ""}>
            {best_of_chapter &&
                best_of_chapter
                    .splice(1, 4)
                    .map(
                        (
                            { topic, title, author, id, data, time_reading },
                            idx
                        ) => (
                            <BestArticlesItem
                                key={idx}
                                topic={topic}
                                title={title}
                                author={author}
                                data={data}
                                time_reading={time_reading}
                                chapter={chapter}
                            />
                        )
                    )}
        </List>
    );
};
