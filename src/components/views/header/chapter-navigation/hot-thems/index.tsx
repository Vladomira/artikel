import Link from "next/link";
import { FC } from "react";
import { Colors } from "../../../../../utils/colors";
import { Label } from "../../../../label";
import { List } from "../../../../list";
import { HotThemItem } from "./hot-them-item.styles";

const hotThemsItems = [
    { name: "Poëzie", link: "/" },
    { name: "Familie", link: "/" },
    { name: "Geestelijk", link: "/" },
    { name: "Samenleving", link: "/" },
];
export const HotThems: FC = () => {
    return (
        <>
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
                {hotThemsItems.map(({ name, link }) => (
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
        </>
    );
};
