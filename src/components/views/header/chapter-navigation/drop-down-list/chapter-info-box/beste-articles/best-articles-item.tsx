import { FC } from "react";
import { Colors } from "../../../../../../../utils/colors";
import { ArticleInfo } from "../../../../../../article/article";
import { ListItem } from "../../../../../../list";

type TopicListProps = {
    topic: string;
    title: string;
    author: string;
    data: string;
    time_reading: number;
    chapter: string;
};

export const BestArticlesItem: FC<TopicListProps> = ({
    topic,
    title,
    author,
    data,
    time_reading,

    chapter,
}) => {
    return (
        <ListItem
            padding="15px 0px"
            width={355}
            borderBottomNLast={Colors.TEXT_GREY}
        >
            {title && (
                <ArticleInfo
                    chapterName={chapter}
                    data={data}
                    author={author}
                    topic={topic}
                    title={title}
                    time_reading={time_reading}
                />
            )}
        </ListItem>
    );
};
