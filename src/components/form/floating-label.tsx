import React, { PropsWithChildren } from "react";
import { FloatingLabelStyled, InputWrapper } from "./floatin-input.styles";

export type InputLabelProps = {
    labelText: string;
};

type OtherProps = {
    active: boolean;
    value?: string;
    activeColor?: string;
    marginTop?: number;
};

export const FloatingLabel = ({
    active,
    labelText,
    children,
    value,
    activeColor,
    marginTop,
}: PropsWithChildren<InputLabelProps & OtherProps>) => {
    return (
        <InputWrapper
            position="relative"
            active={active}
            marginTop={marginTop ? marginTop : 13}
            alignItems="center"
            activeColor={activeColor}
        >
            {children}
            <FloatingLabelStyled
                active={active}
                value={value}
                activeColor={activeColor}
            >
                {labelText}
            </FloatingLabelStyled>
        </InputWrapper>
    );
};
