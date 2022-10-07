import { FC } from "react";

import { LoginForm } from "./login-form";
import { IsAccauntBox } from "../../../../../form/is-accaunt";
import { WrapperBox } from "../../../../../wrapper-box";
import { CloseButton } from "../../../../../close-button";

type LoginComponentprops = {
    setIsOpen: (props: boolean) => void;
    setIsOpenModal: (prop: boolean) => void;
};

export const LoginComponent: FC<LoginComponentprops> = ({
    setIsOpen,
    setIsOpenModal,
}) => (
    <WrapperBox direction="column" position="relative">
        <CloseButton setIsOpen={setIsOpenModal} top={"0px"} right={"0px"} />
        <LoginForm />
        <IsAccauntBox
            text={"Nog geen account?"}
            link={"registreer"}
            linkText={"Maak een account"}
            setIsOpen={setIsOpen}
            marginTop={30}
        />
    </WrapperBox>
);
