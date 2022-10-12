import { FC } from "react";
import { CloseButton } from "../../../../../close-button";
import { IsAccauntBox } from "../../../../../form/is-accaunt";
import { WrapperBox } from "../../../../../wrapper-box";
import { RegisterForm } from "./register-form";

type FormProps = {
    setIsOpenModal: (prop: boolean) => void;
    setIsOpen: (prop: boolean) => void;
};
export const RegisterComponent: FC<FormProps> = ({
    setIsOpenModal,
    setIsOpen,
}) => {
    return (
        <WrapperBox alignItems="center" direction="column" position="relative">
            <CloseButton
                setIsOpen={setIsOpenModal}
                position="absolute"
                top={"0px"}
                right={"0px"}
            />
            <RegisterForm />
            <IsAccauntBox
                text={"Al een account?"}
                link={"login"}
                linkText={"Login"}
                marginTop={30}
                setIsOpen={setIsOpen}
            />
        </WrapperBox>
    );
};
