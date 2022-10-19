import { FC } from "react";
import { LastArticleItemProps } from "..";
import { List } from "../../../../list";
import { LastArticlesItem } from "./last-articles-item";

type ArticlesListProps = {
    articles: LastArticleItemProps[];
};
export const LastArticlesList: FC<ArticlesListProps> = ({ articles }) => {
    return (
        <List>
            {articles.map(
                (
                    {
                        category,
                        genre,
                        title,
                        article,
                        author,
                        data,
                        time,
                        imgName,
                        views,
                    },
                    idx
                ) => (
                    <LastArticlesItem
                        key={idx}
                        category={category}
                        genre={genre}
                        title={title}
                        author={author}
                        data={data}
                        time={time}
                        imgName={imgName}
                    />
                )
            )}
        </List>
    );
};
