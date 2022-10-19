import { FC } from "react";
import { ChapterInfo } from "../../context/chapters-context";
import { ArticleInfo } from "./article";
import { WrapperBox } from "../wrapper-box";
import { ScaleIcon } from "./scale-icon";

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
                <ScaleIcon
                    link=""
                    format={bigChapter.format}
                    folder={bigChapter.imgFolder}
                    imgWidth={356}
                    imgHeight={185}
                    imgName={bigChapter.img}
                />
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
