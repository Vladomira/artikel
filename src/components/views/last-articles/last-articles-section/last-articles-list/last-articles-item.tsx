import { FC } from "react";
import { LastArticleItemProps } from "..";
import { Colors } from "../../../../../utils/colors";
import { MediaScreen } from "../../../../../utils/media";
import { ActualArticleInfo } from "../../../../article/actual-article";
import { ScaleIcon } from "../../../../article/scale-icon";
import { ListItem } from "../../../../list";
import { WrapperBox } from "../../../../wrapper-box";

export const LastArticlesItem: FC<LastArticleItemProps> = ({
    category,
    genre,
    title,
    author,
    data,
    time,
    imgName,
}) => (
    <ListItem
        padding="20px 0px"
        borderTop={`1px solid ${Colors.GREY_BORDER_TOP}`}
    >
        <WrapperBox margin="0px 30px 0px 0px" mediaHidden={MediaScreen.MOBILE}>
            <ScaleIcon
                imgName={imgName}
                link={""}
                format={"webp"}
                folder={"last-articles"}
                imgWidth={193}
                imgHeight={97}
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
            titleFntSize={20}
            titleLineHeight={"24px"}
            alignItems="stretch"
            marginTopAuthor={8}
        />
    </ListItem>
);
