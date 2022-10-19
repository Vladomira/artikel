import { FC } from "react";
import { MoreArticleItem } from "..";
import { Colors } from "../../../../../utils/colors";
import { MediaScreen } from "../../../../../utils/media";
import { ActualArticleInfo } from "../../../../article/actual-article";
import { ScaleIcon } from "../../../../article/scale-icon";

import { List, ListItem } from "../../../../list";
import { WrapperBox } from "../../../../wrapper-box";

type MoreArticlesListProps = {
    articles: MoreArticleItem[];
};

export const MoreArticlesList: FC<MoreArticlesListProps> = ({ articles }) => {
    return (
        <List>
            {articles.map(
                ({
                    category,
                    genre,
                    title,
                    author,
                    data,
                    time,
                    imgName,
                    views,
                }) => (
                    <ListItem
                        key={imgName + views}
                        borderBottomNLast={Colors.GREY_BORDER_TOP}
                        direction="column"
                        padding="20px 0px"
                    >
                        <WrapperBox
                            marginBottom={20}
                            mediaHidden={MediaScreen.MINI_MOBILE}
                        >
                            <ScaleIcon
                                imgName={imgName}
                                link={""}
                                format={"webp"}
                                folder={"more-reading"}
                                imgWidth={360}
                                imgHeight={200}
                                marginBottom={"0px"}
                            />
                        </WrapperBox>
                        <ActualArticleInfo
                            chapterName={category}
                            data={data}
                            author={author}
                            topic={genre}
                            title={title}
                            time_reading={time}
                            chapterFontSize={12}
                            topicFntSize={12}
                            marginTopAuthor={10}
                            titleFntSize={20}
                            titleLineHeight={"24px"}
                            titleWhiteSpace=" "
                        />
                    </ListItem>
                )
            )}
        </List>
    );
};
