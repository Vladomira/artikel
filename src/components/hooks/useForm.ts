import { useContext, useState } from "react";
import { AuthContext } from "../../context/auth-context";
import { REG_EX } from "../../utils/form-error";

export type UserDataProps = {
    email: string;
    password: string;
};
export const initialUserData: UserDataProps = {
    email: "",
    password: "",
};

export default function useRrgisterForm() {
    const { createError } = useContext(AuthContext);
    const [userData, setUserData] = useState<UserDataProps>(initialUserData);

    const [isValid, setIsValid] = useState(false);
    // const setIsValid = (prop: boolean) => setisValid(prop);

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

    return {
        onHandleChange,
        userData,
        setIsValid,
        isValid,
        setUserData,
    };
}
