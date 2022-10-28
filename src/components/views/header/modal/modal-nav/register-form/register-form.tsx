import { FC, SyntheticEvent, useContext, useEffect, useState } from "react";
import { CheckboxComponent } from "../../../../../form/checkbox";
import { FormComponent } from "../../../../../form";
import { Colors } from "../../../../../../utils/colors";
import { StyledParagraph } from "../../../../../paragraph/paragraph.styles";
import { LinkComponent } from "../../../../../link";
import { InputWithFloatingLabel } from "../../../../../form/form-input";
import { AuthContext } from "../../../../../../context/auth-context";
import { initialUserData, UserDataProps } from "../modal-login/login-form";
import { useRouter } from "next/router";

type UserNameProps = {
    name: string;
    surname: string;
};

export const RegisterForm: FC = () => {
    const router = useRouter();
    const { error, registerUser, isLoggedIn, createUser, changeIsLoggedIn } =
        useContext(AuthContext);
    const [userData, setUserData] = useState<UserDataProps>(initialUserData);
    const [userName, setUserName] = useState<UserNameProps>({
        name: "",
        surname: "",
    });
    useEffect(() => {
        isLoggedIn && router.push("/");
    }, [isLoggedIn]);

    const onHandleChange = (name: string, value: string) => {
        setUserData((prev) => {
            return { ...prev, [name]: value };
        });
    };

    const handleOnSubmit = (event: SyntheticEvent) => {
        event.preventDefault();

        if (!error) {
            registerUser(userData.email, userData.password);
            createUser(userData.email, userData.password);

            setUserData(initialUserData);
            changeIsLoggedIn(true);
            router.push("/");
        }
    };
    return (
        <>
            <FormComponent
                submitText="WORD NU LID"
                marginButtonTop={13}
                title={"Registreer"}
                marginInputTop={6}
                titleBottom={11}
                handleOnSubmit={handleOnSubmit}
                onHandleChange={onHandleChange}
                email={userData.email}
                password={userData.password}
            >
                <InputWithFloatingLabel
                    name={userName.name}
                    labelText={"Voornaam"}
                    value={userName.name}
                    onHandleChange={onHandleChange}
                    type="text"
                    activeColor={Colors.ORANGE}
                    marginTop={6}
                />
                <InputWithFloatingLabel
                    name={userName.surname}
                    labelText={"Achternaam"}
                    value={userName.surname}
                    onHandleChange={onHandleChange}
                    type="text"
                    activeColor={Colors.ORANGE}
                    marginTop={6}
                />
                <CheckboxComponent marginTop={13}>
                    <StyledParagraph
                        color={Colors.WHITE}
                        fontSize={12}
                        lineHeight={"1.4"}
                        fontWeight={300}
                        marginLeft={7}
                    >
                        Ik ga akkoord met de &nbsp;
                        <LinkComponent
                            text={"algemene voorwaarden"}
                            hoverColor={Colors.ORANGE}
                            color={Colors.WHITE}
                            link={
                                "https://artikel.nl/pdf/algemenevoorwaarden.pdf"
                            }
                            fontSize={12}
                            fontWeight={700}
                            decoration={"underline"}
                            noopener
                        />
                        &nbsp;en&nbsp;
                        <LinkComponent
                            hoverColor={Colors.ORANGE}
                            text={"privacy policy"}
                            color={Colors.WHITE}
                            link={"https://artikel.nl/pdf/privacybeleid.pdf"}
                            decoration={"underline"}
                            fontSize={12}
                            fontWeight={700}
                            noopener
                        />
                        .
                    </StyledParagraph>
                </CheckboxComponent>
                <CheckboxComponent
                    text="Ik wil mij aanmelden bij de nieuwsbrief."
                    marginTop={13}
                />
            </FormComponent>
        </>
    );
};
