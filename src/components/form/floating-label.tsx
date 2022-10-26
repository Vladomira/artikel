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
    mobileLabelLeft?: string;
};

export const FloatingLabel = ({
    active,
    labelText,
    children,
    value,
    activeColor,
    marginTop,
    mobileLabelLeft,
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
                mobileLabelLeft={mobileLabelLeft}
            >
                {labelText}
            </FloatingLabelStyled>
        </InputWrapper>
    );
};
