import { PropsWithChildren, SyntheticEvent, useContext, useState } from "react";
import { InputWithFloatingLabel } from "./form-input";
import { WrapperBox } from "../wrapper-box";
import { EyeIcon } from "./form-eye";
import { Colors } from "../../utils/colors";
import { SubmitButton } from "../submit-button";
import { Title } from "../title";
import { StyledPureForm } from "./pure-form.styles";
import { AuthContext } from "../../context/auth-context";

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
};

export enum FormErrors {
    FIRST_NAME = "Required",
    LAST_NAME = "Required",
    EMAIL = "Email is not valid",
    PASSWORD = "Password must be at least 6 characters",
}
let errors = {
    email: FormErrors.EMAIL,
    password: FormErrors.PASSWORD,
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
}: PropsWithChildren<FormComponentProps>) => {
    const [visiblePassword, setVisiblePassword] = useState(false);

    // const handleOnSubmit = (event: SyntheticEvent) => {
    //     event.preventDefault();
    //     // if (!validateForm(errors)) {
    //     //     setFormErrors(errors);
    //     //     setIsSubmited(true);
    //     //     return;
    //     // }
    //     // const { email, password } = formValues;
    //     // signInWithCredentials(email, password);
    //     // setFormValues({
    //     //     email: "",
    //     //     password: "",
    //     // });
    //     registerUser(userData.email, userData.password);
    //     createUser(userData.email, userData.password);
    //     changeIsLoggedIn(true);
    //     setUserData(initialData);
    // };

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
                />

                <InputWithFloatingLabel
                    name="password"
                    labelText={"Wachtwoord"}
                    onHandleChange={onHandleChange}
                    value={password}
                    type={visiblePassword ? "text" : "password"}
                    marginTop={marginInputTop}
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
                    text={submitText}
                    marginTop={marginButtonTop ? marginButtonTop : 48}
                />
            </StyledPureForm>
        </>
    );
};

// switch (name) {
// case "email":
// /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
//     ? alert(FormErrors.EMAIL)
//     : setUserData((prev) => {
//           return { ...prev, [name]: value };
//       });

// case "password":
//     return value.length >= 6
//         ? setUserData((prev) => {
//               return { ...prev, [name]: value };
//           })
//         : FormErrors.PASSWORD;
// }
