import React, { PropsWithChildren, useState, useContext } from "react";
import { InputLabelProps, FloatingLabel } from "./floating-label";
import { FloatingInput, InputBoxItem } from "./floatin-input.styles";
import { Errors, REG_EX } from "../../utils/form-error";
import { AuthContext } from "../../context/auth-context";

type TextInputProps = {
    name: string;
    onHandleChange: (name: string, value: string) => void;
    value: string;
    type: string;
    activeColor?: string;
    marginTop?: number;
    boxwidth?: string;
    mobileLabelLeft?: string;
    setIsValid?: (prop: boolean) => void;
};

export const InputWithFloatingLabel = ({
    name,
    onHandleChange,
    value,
    type,
    children,
    activeColor,
    marginTop,
    boxwidth,
    mobileLabelLeft,
    setIsValid,
    ...otherProps
}: PropsWithChildren<TextInputProps & InputLabelProps>) => {
    const { error, createError } = useContext(AuthContext);
    const [active, setActive] = useState(false);
    const onBlur = (name: string, value: string) => {
        value !== "" && value ? setActive(true) : setActive(false);

        switch (name) {
            case "email":
                !REG_EX.test(value)
                    ? (createError(Errors.EMAIL),
                      setIsValid && setIsValid(false))
                    : setIsValid(true);
                break;

            case "password":
                value.length < 8
                    ? (createError(Errors.PASSWORD), setIsValid(false))
                    : setIsValid(true);
                break;
        }
    };

    const onFocus = () => {
        setActive(true);
    };

    return (
        <InputBoxItem boxwidth={boxwidth}>
            <FloatingLabel
                active={active}
                value={value}
                {...otherProps}
                marginTop={marginTop}
                activeColor={activeColor}
                mobileLabelLeft={mobileLabelLeft}
            >
                <FloatingInput
                    onBlur={() => onBlur(name, value)}
                    onFocus={onFocus}
                    onChange={({ target: { name, value } }) =>
                        onHandleChange(name, value)
                    }
                    value={value}
                    name={name}
                    type={type}
                />
                {children}
            </FloatingLabel>
        </InputBoxItem>
    );
};
