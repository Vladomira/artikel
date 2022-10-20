import { FC } from "react";
import { ArticleItemProps } from "..";
import { ActualArticlesItem } from "./actual-item";
import CarouselReset from "../../../carousel/carousel-reset";
import { WrapperBox } from "../../../wrapper-box";
import { Colors } from "../../../../utils/colors";

type ActualArticlesProps = {
    articles: ArticleItemProps[];
};

export const ActualArticlesList: FC<ActualArticlesProps> = ({ articles }) => {
    return (
        <WrapperBox width="100%" height={330} position="relative">
            <CarouselReset
                numberOfSlides={1}
                isDots={true}
                noBottomOffset
                autoplaySpeed={7000}
                autoPlay
                speed={1000}
                arrows
                boxShadow="0 2px 10px rgb(0 0 0 / 15%)"
                dotStyle={{
                    activeDot: {
                        dotOffset: 0,
                        width: 8,
                        height: 8,
                        borderRadius: 50,
                        backgroundColor: ` ${Colors.BLACK}`,
                    },
                    notActiveDot: {
                        dotOffset: 4,
                        width: 6,
                        height: 6,
                        borderRadius: 50,
                    },
                }}
            >
                {articles.length > 0 &&
                    articles.map(
                        ({
                            title,
                            category,
                            genre,
                            article,
                            author,
                            data,
                            time,
                            imgName,
                        }) => {
                            return (
                                <ActualArticlesItem
                                    key={imgName}
                                    category={category}
                                    title={title}
                                    genre={genre}
                                    article={article}
                                    author={author}
                                    data={data}
                                    time={time}
                                    imgName={imgName}
                                />
                            );
                        }
                    )}
            </CarouselReset>
        </WrapperBox>
    );
};
