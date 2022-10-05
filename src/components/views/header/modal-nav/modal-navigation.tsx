import Link from "next/link";
import React, { FC, useState } from "react";
import { modalNavItems } from "../../../../utils/arrays/modal-nav";
import { Colors } from "../../../../utils/colors";
import { Label } from "../../../label";
import { List, ListItem } from "../../../list";
import { ModalLogin } from "./modal-login";

export type ModalNavigationProps = {
    setIsOpen?: (prop: boolean) => void;
};
export const ModalNavigation: FC<ModalNavigationProps> = ({ setIsOpen }) => {
    const [isOpenLogin, setisOpenLogin] = useState(false);
    return (
        <>
            <nav style={{ marginBottom: "60px" }}>
                <List display="flex" direction="column">
                    {modalNavItems.map(({ name, link }) => {
                        return (
                            <ListItem
                                key={name}
                                borderBottomNLast={Colors.LIGHT_GREY}
                                padding="16px 0"
                                onClick={() =>
                                    name === "Login"
                                        ? setisOpenLogin(true)
                                        : setIsOpen(false)
                                }
                            >
                                <Link href={link}>
                                    <a>
                                        <Label
                                            color={Colors.WHITE}
                                            fontSize={14}
                                            fontWeight={700}
                                            lineHeight={"0"}
                                            letterSpacing={""}
                                            text={name}
                                        />
                                    </a>
                                </Link>
                            </ListItem>
                        );
                    })}
                </List>
            </nav>
            {isOpenLogin && <ModalLogin setIsOpen={setisOpenLogin} />}
        </>
    );
};
