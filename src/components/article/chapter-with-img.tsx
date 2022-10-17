import Link from "next/link";
import { FC } from "react";
import { ChapterInfo } from "../../context/chapters-context";
import { ArticleInfo } from "./article";
import { Icon } from "../icon";
import { WrapperBox } from "../wrapper-box";
import { ScaleWrapper, ScaleLink } from "./scale-wrapper.styles";

type ChapterWithImgProps = {
    bigChapter: ChapterInfo;
    chapter: string;
};
export const ArticleWithImg: FC<ChapterWithImgProps> = ({
    bigChapter,
    chapter,
}) => {
    return (
        <WrapperBox
            direction="column"
            marginLeft={35}
            padding="0px 85px 0px 0px"
            minWidth="441px"
        >
            {bigChapter.img.length !== 0 && (
                <Link href="" passHref>
                    <ScaleLink>
                        <ScaleWrapper>
                            <Icon
                                imgName={bigChapter.img}
                                format={bigChapter.format}
                                folder={bigChapter.imgFolder}
                                width={356}
                                height={185}
                            />
                        </ScaleWrapper>
                    </ScaleLink>
                </Link>
            )}
            {bigChapter.img.length !== 0 && (
                <ArticleInfo
                    chapterName={chapter}
                    data={bigChapter.data}
                    author={bigChapter.author}
                    topic={bigChapter.topic}
                    title={bigChapter.title}
                    time_reading={bigChapter.time_reading}
                />
            )}
        </WrapperBox>
    );
};
