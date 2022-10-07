import { PropsWithChildren, useState } from "react";
import { Form } from "antd";
import { InputWithFloatingLabel } from "./form-input";
import { WrapperBox } from "../wrapper-box";
import { EyeIcon } from "./form-eye";
import { Colors } from "../../utils/colors";
import { SubmitButton } from "../submit-button";
import { Title } from "../title";

type UserDataProps = {
    email: string;
    password: string;
};
const initialData: UserDataProps = {
    email: "",
    password: "",
};
type FormComponentProps = {
    submitText: string;
    title?: string;
    buttonBack?: string;
    marginButtonTop?: number;
    marginInputTop: number;
    titleBottom?: number;
};

export const FormComponent = ({
    submitText,
    children,
    title,
    marginButtonTop,
    marginInputTop,
    titleBottom,
}: PropsWithChildren<FormComponentProps>) => {
    const [userData, setUserData] = useState<UserDataProps>(initialData);
    const [visiblePassword, setVisiblePassword] = useState(false);
    const onHandleChange = (name: string, value: string) => {
        setUserData((prev) => {
            return { ...prev, [name]: value };
        });
    };

    return (
        <>
            <Form>
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
                    value={userData.email}
                    onHandleChange={onHandleChange}
                    type="email"
                />

                <InputWithFloatingLabel
                    name="password"
                    labelText={"Wachtwoord"}
                    onHandleChange={onHandleChange}
                    value={userData.password}
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
            </Form>
        </>
    );
};
