import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { hotThemsItems } from "../../../../../utils/arrays/hot-thems";
import { Colors } from "../../../../../utils/colors";
import { Label } from "../../../../label";
import { List } from "../../../../list";
import { WrapperBox } from "../../../../wrapper-box";
import { HotThemItem } from "./hot-them-item.styles";

type ThemsType = {
    name: string;
    link: string;
};
type HotThemsProps = {
    mediaHidden?: string;
};

export const HotThems: FC<HotThemsProps> = ({ mediaHidden }) => {
    const [thems, setThems] = useState<ThemsType[]>([]);
    const today = new Date().getUTCHours();

    useEffect(() => {
        const randomNumber = randomPoint(1, hotThemsItems.length);
        randomNumber !== 11
            ? setThems(hotThemsItems.slice(randomNumber, randomNumber + 3))
            : setThems(hotThemsItems.slice(randomNumber));
    }, [today]);

    const randomPoint = (min: number, max: number) =>
        Math.floor(Math.random() * (max - min + 1) + min);

    return (
        <WrapperBox
            mediaHidden={mediaHidden}
            padding={mediaHidden && "12px 0px 12px 28px"}
            borderTop={mediaHidden ? `1px solid ${Colors.TEXT_GREY}` : ""}
            borderBottom={mediaHidden ? `1px solid ${Colors.TEXT_GREY}` : ""}
        >
            <Label
                color={Colors.MIDDLE_GREY}
                fontSize={14}
                fontWeight={300}
                lineHeight={"1.4"}
                letterSpacing={""}
                text={"Hot topics:"}
                marginRight={8}
                whiteSpace="nowrap"
            />
            <List display="flex" overflow="unset">
                {thems.map(({ name, link }) => (
                    <HotThemItem
                        key={name}
                        marginRightNotLast={16}
                        alignItems="center"
                    >
                        <Link href={link} passHref>
                            <a>
                                <Label
                                    color={Colors.BLACK}
                                    fontSize={14}
                                    fontWeight={300}
                                    lineHeight={"1.4"}
                                    letterSpacing={""}
                                    text={name}
                                    hoverColor={Colors.ORANGE}
                                />
                            </a>
                        </Link>
                    </HotThemItem>
                ))}
            </List>
        </WrapperBox>
    );
};
