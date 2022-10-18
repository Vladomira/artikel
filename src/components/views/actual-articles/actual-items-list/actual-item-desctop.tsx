import Link from "next/link";
import { FC } from "react";
import { ArticleItemProps } from "..";
import { MediaScreen } from "../../../../utils/media";
import { ActualArticleInfo } from "../../../article/actual-article";
import { ScaleLink, ScaleWrapper } from "../../../article/scale-wrapper.styles";
import { Icon } from "../../../icon";
import { WrapperBox } from "../../../wrapper-box";

export const ActualArticlesDesctop: FC<ArticleItemProps> = ({
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
        <WrapperBox mediaHidden={MediaScreen.MINI_MOBILE}>
            <ActualArticleInfo
                chapterName={category}
                data={data}
                author={author}
                topic={genre}
                title={title}
                time_reading={time}
                article={article}
                infoBoxWidth={"564px"}
                padding="16px 0px 24px 64px"
            />
            <WrapperBox marginLeft={30}>
                <Link href="" passHref>
                    <ScaleLink marginBottom="0px">
                        <ScaleWrapper width="566px" height={330}>
                            <Icon
                                imgName={imgName}
                                folder="actual-articles"
                                width={566}
                                height={330}
                                format={"webp"}
                                objectFit="cover"
                            />
                        </ScaleWrapper>
                    </ScaleLink>
                </Link>
            </WrapperBox>
        </WrapperBox>
    );
};
