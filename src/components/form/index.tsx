import { PropsWithChildren, SyntheticEvent, useContext, useState } from "react";
import { InputWithFloatingLabel } from "./form-input";
import { WrapperBox } from "../wrapper-box";
import { EyeIcon } from "./form-eye";
import { Colors } from "../../utils/colors";
import { SubmitButton } from "../submit-button";
import { Title } from "../title";
import { StyledPureForm } from "./pure-form.styles";

type FormComponentProps = {
    submitText: string;
    title?: string;
    buttonBack?: string;
    marginButtonTop?: number;
    marginInputTop: number;
    titleBottom?: number;
    email: string;
    password: string;
    handleOnSubmit: (event: SyntheticEvent) => void;
    onHandleChange: (name: string, value: string) => void;
    setIsValid: (prop: boolean) => void;
    disabled?: boolean;
};

export const FormComponent = ({
    submitText,
    children,
    title,
    marginButtonTop,
    marginInputTop,
    titleBottom,
    handleOnSubmit,
    onHandleChange,
    email,
    password,
    setIsValid,
    disabled,
}: PropsWithChildren<FormComponentProps>) => {
    const [visiblePassword, setVisiblePassword] = useState(false);

    return (
        <>
            <StyledPureForm onSubmit={handleOnSubmit}>
                {title && (
                    <Title
                        color={Colors.WHITE}
                        fontSize={22}
                        fontWeight={700}
                        lineHeight={"1.1"}
                        letterSpacing={".13em"}
                        text={title}
                        textTransform="uppercase"
                        fontFamily="Playfair Display,serif"
                        marginBottom={titleBottom}
                    />
                )}

                <InputWithFloatingLabel
                    name="email"
                    labelText={"E-mail"}
                    value={email}
                    onHandleChange={onHandleChange}
                    type="email"
                    setIsValid={setIsValid}
                />

                <InputWithFloatingLabel
                    name="password"
                    labelText={"Wachtwoord"}
                    onHandleChange={onHandleChange}
                    value={password}
                    type={visiblePassword ? "text" : "password"}
                    marginTop={marginInputTop}
                    setIsValid={setIsValid}
                >
                    <WrapperBox
                        onClick={() => setVisiblePassword(!visiblePassword)}
                        marginLeft={5}
                    >
                        <EyeIcon
                            opacity={visiblePassword ? 1 : 0.5}
                            fill={Colors.WHITE}
                            size={20}
                        />
                    </WrapperBox>
                </InputWithFloatingLabel>

                {children}

                <SubmitButton
                    disabled={disabled}
                    text={submitText}
                    marginTop={marginButtonTop ? marginButtonTop : 48}
                />
            </StyledPureForm>
        </>
    );
};
