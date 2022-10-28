import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { FC } from "react";
import { AuthContext } from "../../../../context/auth-context";
import { Colors } from "../../../../utils/colors";
import { Button } from "../../../button/button";
import { Label } from "../../../label";
import { List } from "../../../list";
import { ListItemDecorated } from "../../../list/list-item.styles";

const navItems = [
    { name: "Voorpagina", link: "/#" },
    { name: "Over Artikel.nl", link: "/#" },
    { name: "Login", link: "/login" },
    { name: "Registreren", link: "/register" },
    { name: "Uitloggen", link: "" },
];
export const Navigation: FC = () => {
    const router = useRouter();
    const { isLoggedIn, logOut } = useContext(AuthContext);
    const onHabdleClick = (link: string, name: string) => {
        const condition = link === "/login" || link === "/register";
        if (condition && isLoggedIn) {
            return;
        }
        if (name === "Uitloggen") {
            logOut();
            router.push("/login");
        }
        router.push(link);
    };
    return (
        <nav>
            <List display="flex" overflow="unset">
                {navItems.map(({ name, link }) => (
                    <ListItemDecorated
                        key={name}
                        marginRightNotLast={16}
                        alignItems="center"
                    >
                        {/* need to ask */}
                        {/* <Link href={link}>
                            <a> */}
                        <Button onClick={() => onHabdleClick(link, name)}>
                            <Label
                                color={Colors.WHITE}
                                fontSize={12}
                                fontWeight={0}
                                lineHeight={"0"}
                                letterSpacing={""}
                                text={name}
                            />
                        </Button>
                        {/* </a>
                        </Link> */}
                    </ListItemDecorated>
                ))}
            </List>
        </nav>
    );
};
