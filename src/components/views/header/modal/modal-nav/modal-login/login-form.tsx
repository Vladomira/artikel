import { FC, SyntheticEvent, useContext, useEffect } from "react";
import { Colors } from "../../../../../../utils/colors";
import { CheckboxComponent } from "../../../../../form/checkbox";
import { Button } from "../../../../../button/button";
import { Label } from "../../../../../label";
import { FormComponent } from "../../../../../form";
import { AuthContext } from "../../../../../../context/auth-context";
import { useRouter } from "next/router";
import { WrapperBox } from "../../../../../wrapper-box";
import useRrgisterForm from "../../../../../hooks/useForm";

export type UserDataProps = {
    email: string;
    password: string;
};
export const initialUserData: UserDataProps = {
    email: "",
    password: "",
};

export const LoginForm: FC = () => {
    const { onHandleChange, userData, setIsValid, isValid } = useRrgisterForm();
    const router = useRouter();
    const { error, createError, isLoggedIn, loginUser, changeIsLoggedIn } =
        useContext(AuthContext);

    const handleOnSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        if (error) {
            createError(error);
            return;
        }
        if (!isValid) {
            createError("Type valid data");
            return;
        }
        // if db off
        if (!error && isValid) {
            router.push("/");
            changeIsLoggedIn(true);
        }

        // db on
        // if (!error && isValid) {
        //     try {
        //         loginUser(userData.email, userData.password);

        //     } catch (error) {
        //         createError(error);
        //     }
        // }
    };
    // db on
    // useEffect(() => {
    //     isLoggedIn && router.push("/");
    // }, [isLoggedIn]);
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
