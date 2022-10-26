import React, { PropsWithChildren, useState } from "react";
import { InputLabelProps, FloatingLabel } from "./floating-label";
import { FloatingInput, InputBoxItem } from "./floatin-input.styles";

type TextInputProps = {
    name: string;
    onHandleChange: (name: string, value: string) => void;
    value: string;
    type: string;
    activeColor?: string;
    marginTop?: number;
    boxwidth?: string;
    mobileLabelLeft?: string;
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
    ...otherProps
}: PropsWithChildren<TextInputProps & InputLabelProps>) => {
    const [active, setActive] = useState(false);
    const onBlur = () => {
        value !== "" && value ? setActive(true) : setActive(false);
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
                        onBlur={onBlur}
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
