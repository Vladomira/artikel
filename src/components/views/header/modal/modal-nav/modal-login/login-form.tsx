import { FC, SyntheticEvent, useContext, useState } from "react";
import { Colors } from "../../../../../../utils/colors";
import { CheckboxComponent } from "../../../../../form/checkbox";
import { Button } from "../../../../../button/button";
import { Label } from "../../../../../label";
import { FormComponent } from "../../../../../form";
import { AuthContext } from "../../../../../../context/auth-context";
import { useRouter } from "next/router";
import { WrapperBox } from "../../../../../wrapper-box";
import { REG_EX } from "../../../../../../utils/form-error";

export type UserDataProps = {
    email: string;
    password: string;
};
export const initialUserData: UserDataProps = {
    email: "",
    password: "",
};

export const LoginForm: FC = () => {
    const router = useRouter();
    const { error, createError, loginUser, createUser, changeIsLoggedIn } =
        useContext(AuthContext);
    const [userData, setUserData] = useState<UserDataProps>(initialUserData);
    const [isValid, setIsValid] = useState(false);

    const onHandleChange = (name: string, value: string) => {
        createError("");
        setUserData((prev) => {
            switch (name) {
                case "email":
                    !REG_EX.test(value) ? setIsValid(false) : setIsValid(true);
                    break;

                case "password":
                    value.length < 8 ? setIsValid(false) : setIsValid(true);
                    break;
            }
            return { ...prev, [name]: value };
        });
    };

    const handleOnSubmit = (event: SyntheticEvent) => {
        event.preventDefault();

        if (!isValid) {
            createError("Type valid data");
        }
        if (!error && isValid) {
            return loginUser(userData.email, userData.password).then(
                (result) => {
                    if (result) {
                        createUser(userData.email, userData.password);
                        setUserData(initialUserData);
                        changeIsLoggedIn(true);
                        router.push("/");
                    }
                }
            );
        }
    };

    return (
        <>
            <FormComponent
                submitText={"Login"}
                buttonBack={Colors.WHITE}
                title="Login"
                marginInputTop={13}
                titleBottom={33}
                handleOnSubmit={handleOnSubmit}
                onHandleChange={onHandleChange}
                email={userData.email}
                password={userData.password}
                setIsValid={setIsValid}
                disabled={!isValid}
            >
                <CheckboxComponent text="Onthoud mij" marginTop={13}>
                    <Button>
                        <Label
                            color={Colors.WHITE}
                            fontSize={12}
                            fontWeight={300}
                            lineHeight={"1.4"}
                            text={"Wachtwoord vergeten?"}
                            marginLeft={7}
                            textDecoration="underline"
                            cursor="pointer"
                        />
                    </Button>
                </CheckboxComponent>
                <WrapperBox
                    marginTop={10}
                    onClick={() => router.push("/register")}
                >
                    <Label
                        color={Colors.WHITE}
                        fontSize={12}
                        fontWeight={300}
                        lineHeight={"1.4"}
                        text={"Registreer"}
                        marginTop={7}
                        cursor="pointer"
                    />
                </WrapperBox>
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
