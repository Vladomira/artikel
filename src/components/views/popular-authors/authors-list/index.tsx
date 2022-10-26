import { FC, useEffect, useState } from "react";
import { getColor } from "../../../../utils/helpers/get-color";
import CarouselReset from "../../../carousel/carousel-reset";
import { WrapperBox } from "../../../wrapper-box";
import { AuthorsListItem } from "./author-list-item";

export type AuthorItem = {
    id: number;
    authorName: string;
    article: string;
};
export const AuthorsList: FC = () => {
    const [authors, setAuthors] = useState<AuthorItem[]>([]);

    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        try {
            const response = await fetch(
                "http://localhost:3000/api/popular-authors"
            );
            const data = await response.json();
            setAuthors(data);
        } catch (error) {
            (error as Error).message || "Something went wrong";
        }
    };

    return (
        <WrapperBox width="100%">
            <CarouselReset
                numberOfSlides={6}
                slidesToScroll={1}
                isDots={false}
                speed={1000}
                margiLeft={30}
            >
                {authors &&
                    authors?.map(({ id, authorName, article }) => {
                        return (
                            <AuthorsListItem
                                id={id}
                                key={authorName}
                                authorName={authorName}
                                article={article}
                                borderColor={getColor(id).border}
                                nameColor={getColor(id).nameColor}
                            />
                        );
                    })}
            </CarouselReset>
        </WrapperBox>
    );
};
