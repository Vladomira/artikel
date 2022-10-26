import styled from "styled-components";
import { ButtonProps } from "./button";

export const ButtonStyled = styled.button<ButtonProps>`
    position: ${({ position }) => (position ? position : "")};
    top: ${({ top }) => (top ? top : "")};
    right: ${({ right }) => (right ? right : "")};
    left: ${({ left }) => (left ? left : "")};

    display: ${({ display }) => (display ? `${display}` : "flex")};
    flex-direction: ${({ direction }) => (direction ? `${direction}` : "")};
    justify-content: ${({ jContent }) => (jContent ? `${jContent}` : "center")};
    align-items: ${({ alignItems }) =>
        alignItems ? `${alignItems}` : "center"};

    width: ${({ width }): string => width || ""};
    max-width: ${({ maxWidth }): string => (maxWidth ? `${maxWidth}px` : "")};
    height: ${({ height }): string => (height ? `${height}px` : "")};

    padding: ${({ padding }) => (padding ? `${padding}` : "0px")};
    margin-top: ${({ marginTop }) => (marginTop ? `${marginTop}px` : "")};
    margin-left: ${({ marginLeft }) => (marginLeft ? `${marginLeft}px` : "")};
    margin-bottom: ${({ marginBottom }) =>
        marginBottom ? `${marginBottom}px` : ""};
    margin-right: ${({ marginRight }) =>
        marginRight ? `${marginRight}px` : ""};
    margin: ${({ margin }) => (margin ? margin : "")};
    cursor: pointer;
    border-color: ${({ border }) => (border ? `${border}` : "transparent")};
    border: ${({ border }) => (border ? `${border}` : "transparent")};
    border-radius: ${({ borderRadius }): string => borderRadius || ""};
    background: ${({ background }) =>
        background ? `${background}` : "transparent"};
    color: ${({ color }): string => color || ""};
    z-index:${({ zIndex }) => zIndex || null}

    transition: all 200ms cubic-bezier(0.17, 0.67, 0.83, 0.67);

    &:hover,
    &:focus {
        background: ${({ hoverBackground }) => hoverBackground || ""};
        color: ${({ hoverColor }): string => hoverColor || ""};
    }
`;
