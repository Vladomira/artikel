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
    time_reading: number;
};

export const ArticleInfo: FC<ChapterMainInfoprops> = ({
    chapterName,
    data,
    author,
    topic,
    title,
    time_reading,
}) => {
    return (
        <WrapperBox direction="column">
            <WrapperBox marginBottom={5}>
                <InfoLink
                    link=""
                    color={Colors.ORANGE}
                    labelText={chapterName}
                    fontWeight={700}
                />

                <Link href={""} passHref>
                    <LinkWithDecor>
                        <Label
                            color={Colors.TEXT_GREY}
                            hoverColor={Colors.ORANGE}
                            fontSize={12}
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
            />

            <WrapperBox marginTop={12}>
                <InfoLink
                    link=""
                    hoverColor={Colors.ORANGE}
                    color={Colors.TEXT_GREY}
                    labelText={author}
                    fontWeight={400}
                />
                <LabelDecorated
                    color={Colors.TEXT_GREY}
                    fontSize={12}
                    fontWeight={300}
                    lineHeight={"1.4"}
                    marginLeft={12}
                    whiteSpace="nowrap"
                >
                    {data}
                </LabelDecorated>
                <LabelDecorated
                    color={Colors.BLACK}
                    fontSize={12}
                    fontWeight={400}
                    lineHeight={"1.4"}
                    marginLeft={12}
                    whiteSpace="nowrap"
                >{`${time_reading.toString()} min leestijd`}</LabelDecorated>
            </WrapperBox>
        </WrapperBox>
    );
};
