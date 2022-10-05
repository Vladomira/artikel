import Link from "next/link";
import React from "react";
import { FC } from "react";
import { Colors } from "../../../../utils/colors";
import { Label } from "../../../label";
import { List, ListItem } from "../../../list";
import { ListItemDecorated } from "../../../list/list-item.styles";

const navItems = [
    { name: "Voorpagina", link: "/#" },
    { name: "Over Artikel.nl", link: "/#" },
    { name: "Login", link: "/#" },
    { name: "Registreren", link: "/#" },
];
export const Navigation: FC = () => {
    return (
        <nav>
            <List display="flex" overflow="unset">
                {navItems.map(({ name, link }) => (
                    <ListItemDecorated
                        key={name}
                        marginRightNotLast={16}
                        alignItems="center"
                    >
                        <Link href={link}>
                            <a>
                                <Label
                                    color={Colors.WHITE}
                                    fontSize={12}
                                    fontWeight={0}
                                    lineHeight={"0"}
                                    letterSpacing={""}
                                    text={name}
                                />
                            </a>
                        </Link>
                    </ListItemDecorated>
                ))}
            </List>
        </nav>
    );
};
