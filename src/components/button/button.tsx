import React, { PropsWithChildren } from "react";
import { ButtonStyled } from "./button.styles";

export type ButtonProps = {
    display?: string;
    jContent?: string;
    alignItems?: string;
    direction?: string;
    position?: "absolute" | "relative" | "fixed";
    top?: string;
    right?: string;
    left?: string;

    width?: string;
    maxWidth?: number;
    height?: number;
    padding?: string;
    marginTop?: number;
    marginLeft?: number;
    marginBottom?: number;
    marginRight?: number;
    margin?: string;
    border?: string;
    hoverBackground?: string;

    background?: string;
    borderRadius?: string;
    type?: "button" | "reset" | "submit";
    onClick?: () => void;
};
export const Button = ({
    border,
    width,
    background,
    borderRadius,
    padding,
    alignItems,
    display,
    jContent,
    onClick,
    children,
    marginTop,
    height,
    marginLeft,
    direction,
    marginBottom,
    marginRight,
    maxWidth,
    margin,
    type,
    position,
    top,
    left,
    right,
    hoverBackground,
}: PropsWithChildren<ButtonProps>) => {
    return (
        <ButtonStyled
            hoverBackground={hoverBackground}
            left={left}
            position={position}
            jContent={jContent}
            type={type}
            border={border}
            direction={direction}
            background={background}
            borderRadius={borderRadius}
            padding={padding}
            alignItems={alignItems}
            display={display}
            onClick={onClick}
            width={width}
            marginTop={marginTop}
            height={height}
            marginLeft={marginLeft}
            marginBottom={marginBottom}
            marginRight={marginRight}
            maxWidth={maxWidth}
            margin={margin}
            top={top}
            right={right}
        >
            {children}
        </ButtonStyled>
    );
};
