import Link from "next/link";
import { FC } from "react";
import { ArticleItemProps } from "..";
import { MediaScreen } from "../../../../utils/media";
import { ActualArticleInfo } from "../../../article/actual-article";
import { ScaleLink, ScaleWrapper } from "../../../article/scale-wrapper.styles";
import { Icon } from "../../../icon";
import { WrapperBox } from "../../../wrapper-box";

export const ActualArticlesMibile: FC<ArticleItemProps> = ({
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
        <WrapperBox
            mediaHidden={MediaScreen.TABLET}
            direction="column"
            width="100%"
        >
            <WrapperBox width="100%">
                <Link href="" passHref>
                    <ScaleLink>
                        <ScaleWrapper width="100%" scaleHeight={"324px"}>
                            <Icon
                                imgName={imgName}
                                folder="actual-articles"
                                width={800}
                                height={324}
                                format={"webp"}
                                objectFit="cover"
                            />
                        </ScaleWrapper>
                    </ScaleLink>
                </Link>
            </WrapperBox>
            <ActualArticleInfo
                chapterFontSize={12}
                topicFntSize={12}
                titleFntSize={24}
                chapterName={category}
                data={data}
                author={author}
                topic={genre}
                title={title}
                time_reading={time}
                article={article}
                padding="15px 16px 27px"
                marginTopAuthor={12}
            />
        </WrapperBox>
    );
};
