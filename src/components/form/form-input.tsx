import React, { PropsWithChildren, useState } from "react";
import { InputLabelProps, FloatingLabel } from "./floating-label";
import { FloatingInput, InputBoxItem } from "./floatin-input.styles";
import { Errors, REG_EX } from "../../utils/form-error";

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
    const [active, setActive] = useState(false);
    const onBlur = (name: string, value: string) => {
        value !== "" && value ? setActive(true) : setActive(false);

        switch (name) {
            case "email":
                !REG_EX.test(value)
                    ? (alert(Errors.EMAIL), setIsValid(false))
                    : setIsValid(true);
                break;

            case "password":
                value.length < 8
                    ? (alert(Errors.PASSWORD), setIsValid(false))
                    : setIsValid(true);
                break;
        }
    };

    const onFocus = () => {
        setActive(true);
    };

    return (
        <InputBoxItem boxwidth={boxwidth}>
            <>
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
            </>
        </InputBoxItem>
    );
};
