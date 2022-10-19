import Link from "next/link";
import { FC } from "react";
import { Colors } from "../../utils/colors";
import { Label } from "../label";
import { WrapperBox } from "../wrapper-box";
import { InfoLink } from "./info-link";
import {
    LabelDecorated,
    LinkWithDecor,
} from "../views/header/chapter-navigation/drop-down-list/chapter-info-box/beste-articles/label-with-decor.styles";

type ChapterMainInfoprops = {
    chapterName: string;
    data: string;
    author: string;
    topic: string;
    title: string;
    time_reading: string;
    article?: string;
    padding?: string;
    marginTopAuthor?: number;
    infoBoxWidth?: string;
    chapterFontSize?: number;
    topicFntSize?: number;
    titleFntSize?: number;
    articleLineHeight?: string;
    titleLineHeight?: string;
    titleWhiteSpace?: string;
    alignItems?: string;
};

export const ActualArticleInfo: FC<ChapterMainInfoprops> = ({
    chapterName,
    data,
    author,
    topic,
    title,
    time_reading,
    article,
    padding,
    marginTopAuthor,
    infoBoxWidth,
    chapterFontSize,
    topicFntSize,
    titleFntSize,
    articleLineHeight,
    titleLineHeight,
    titleWhiteSpace,
    alignItems,
}) => {
    return (
        <WrapperBox
            alignItems={alignItems}
            direction="column"
            width={infoBoxWidth || "100%"}
            padding={padding}
            justifyContent={!marginTopAuthor && "space-between"}
        >
            <WrapperBox direction="column">
                <WrapperBox marginBottom={5}>
                    <InfoLink
                        link=""
                        color={Colors.ORANGE}
                        labelText={chapterName}
                        fontWeight={700}
                        fontSize={chapterFontSize || 16}
                    />

                    <Link href={""} passHref>
                        <LinkWithDecor>
                            <Label
                                color={Colors.TEXT_GREY}
                                hoverColor={Colors.ORANGE}
                                fontSize={topicFntSize || 16}
                                fontWeight={400}
                                lineHeight={"1.4"}
                                text={topic}
                            />
                        </LinkWithDecor>
                    </Link>
                </WrapperBox>
                <InfoLink
                    link=""
                    hoverColor={Colors.ORANGE}
                    color={Colors.BLACK}
                    labelText={title}
                    fontWeight={700}
                    fontSize={titleFntSize || 32}
                    lineHeight={titleLineHeight || "40px"}
                    whiteSpace={titleWhiteSpace}
                />
                {article && (
                    <Label
                        color={"grey"}
                        fontSize={topicFntSize || 16}
                        fontWeight={400}
                        lineHeight={articleLineHeight || "24px"}
                        text={article.slice(0, 210)}
                        textAlign="start"
                        marginTop={10}
                    />
                )}
            </WrapperBox>
            <WrapperBox marginTop={marginTopAuthor}>
                <InfoLink
                    link=""
                    hoverColor={Colors.ORANGE}
                    color={Colors.TEXT_GREY}
                    labelText={author}
                    fontWeight={400}
                    fontSize={topicFntSize || 16}
                    whiteSpace="nowrap"
                />
                <LabelDecorated
                    color={Colors.TEXT_GREY}
                    fontWeight={400}
                    fontSize={topicFntSize || 16}
                    lineHeight={"1.4"}
                    marginLeft={12}
                    whiteSpace="nowrap"
                >
                    {data}
                </LabelDecorated>
                <LabelDecorated
                    color={Colors.BLACK}
                    fontWeight={400}
                    fontSize={topicFntSize || 16}
                    lineHeight={"1.4"}
                    marginLeft={12}
                    whiteSpace="nowrap"
                >{`${time_reading.toString()} min leestijd`}</LabelDecorated>
            </WrapperBox>
        </WrapperBox>
    );
};
