import { FC, SyntheticEvent, useContext, useEffect, useState } from "react";
import { CheckboxComponent } from "../../../../../form/checkbox";
import { FormComponent } from "../../../../../form";
import { Colors } from "../../../../../../utils/colors";
import { StyledParagraph } from "../../../../../paragraph/paragraph.styles";
import { LinkComponent } from "../../../../../link";
import { InputWithFloatingLabel } from "../../../../../form/form-input";
import { AuthContext } from "../../../../../../context/auth-context";
import { Label } from "../../../../../label";
import useRrgisterForm from "../../../../../hooks/useForm";
import { useRouter } from "next/router";

type UserNameProps = {
    name: string;
    surname: string;
};

export const RegisterForm: FC = () => {
    const { onHandleChange, userData, setIsValid, isValid } = useRrgisterForm();
    const { error, registerUser, createError, isLoggedIn, changeIsLoggedIn } =
        useContext(AuthContext);
    const [userName, setUserName] = useState<UserNameProps>({
        name: "",
        surname: "",
    });
    const router = useRouter();
    const onHandleChangeName = (name: string, value: string) => {
        createError("");
        setUserName((prev) => {
            switch (name) {
                case "name":
                    value.length < 2 ? setIsValid(false) : setIsValid(true);
                    break;

                case "surname":
                    value.length < 2 ? setIsValid(false) : setIsValid(true);
                    break;
            }
            return { ...prev, [name]: value };
        });
    };

    const handleOnSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        if (error) {
            createError("Something went wrong");
            return;
        }
        if (!isValid) {
            createError("Type correct data");
            return;
        }
        if (!error && isValid) {
            try {
                registerUser(userData.email, userData.password);
            } catch (error) {
                changeIsLoggedIn(false);
                createError(error);
            }
        }
    };
    useEffect(() => {
        isLoggedIn && router.push("/");
    }, [isLoggedIn]);

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
                setIsValid={setIsValid}
                disabled={!isValid}
            >
                <InputWithFloatingLabel
                    name={"name"}
                    labelText={"Voornaam"}
                    value={userName.name}
                    onHandleChange={onHandleChangeName}
                    type="text"
                    activeColor={Colors.ORANGE}
                    marginTop={6}
                    setIsValid={setIsValid}
                />
                <InputWithFloatingLabel
                    name={"surname"}
                    labelText={"Achternaam"}
                    value={userName.surname}
                    onHandleChange={onHandleChangeName}
                    type="text"
                    activeColor={Colors.ORANGE}
                    marginTop={6}
                    setIsValid={setIsValid}
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

                {error && (
                    <Label
                        color={Colors.CARROT}
                        fontSize={14}
                        fontWeight={400}
                        lineHeight={"1.4"}
                        text={error}
                        marginTop={30}
                    />
                )}
            </FormComponent>
        </>
    );
};
