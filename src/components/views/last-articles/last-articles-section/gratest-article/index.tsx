import { FC } from "react";
import { LastArticleItemProps } from "..";
import { ActualArticleInfo } from "../../../../article/actual-article";
import { WrapperBox } from "../../../../wrapper-box";
import { MediaScreen } from "../../../../../utils/media";
import { GratestWrapper } from "./gratest-wrapper.styles";
import Link from "next/link";
import {
    ScaleLink,
    ScaleWrapper,
} from "../../../../article/scale-wrapper.styles";
import { Icon } from "../../../../icon";

type GratestArticleprops = {
    gratestArticle: LastArticleItemProps;
};

export const GratestArticle: FC<GratestArticleprops> = ({
    gratestArticle: {
        category,
        genre,
        title,
        article,
        author,
        data,
        time,
        imgName,
    },
}) => {
    return (
        <GratestWrapper marginBottom={20} marginTop={20} width="100%">
            <WrapperBox
                width="100%"
                mediaHidden={MediaScreen.DESKTOP}
                marginBottom={15}
            >
                <Link href="" passHref>
                    <ScaleLink>
                        <ScaleWrapper width="100%">
                            <Icon
                                imgName={imgName}
                                folder="last-articles"
                                width={800}
                                height={324}
                                format={"webp"}
                                objectFit="cover"
                            />
                        </ScaleWrapper>
                    </ScaleLink>
                </Link>
            </WrapperBox>

            {/* desktop */}
            <WrapperBox
                margin="0px 24px 0px 0px"
                mediaHidden={MediaScreen.MOBILE}
                width="100%"
            >
                <Link href="" passHref>
                    <ScaleLink marginBottom="0px">
                        <ScaleWrapper minWidth="330px">
                            <Icon
                                imgName={imgName}
                                folder="last-articles"
                                width={330}
                                height={180}
                                format={"webp"}
                                objectFit="cover"
                            />
                        </ScaleWrapper>
                    </ScaleLink>
                </Link>
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
                titleFntSize={20}
                article={article}
                articleLineHeight={"18px"}
                titleLineHeight={"24px"}
            />
        </GratestWrapper>
    );
};
