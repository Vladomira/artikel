import { FC } from "react";
import { ArticleItemProps } from "..";
import { ActualArticlesDesctop } from "./actual-item-desctop";
import { ActualArticlesMibile } from "./actual-item-mobile";

export const ActualArticlesItem: FC<ArticleItemProps> = ({
    category,
    genre,
    title,
    article,
    author,
    data,
    time,
    imgName,
}) => {
    return (
        <>
            <ActualArticlesDesctop
                category={category}
                genre={genre}
                title={title}
                article={article}
                author={author}
                data={data}
                time={time}
                imgName={imgName}
            />
            <ActualArticlesMibile
                category={category}
                genre={genre}
                title={title}
                article={article}
                author={author}
                data={data}
                time={time}
                imgName={imgName}
            />
        </>
    );
};
