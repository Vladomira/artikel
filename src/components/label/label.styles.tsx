import styled from "styled-components";

export type LabelStyledProps = {
    color: string;
    fontSize: number;
    fontWeight: number;
    lineHeight: string;
    letterSpacing: string;

    marginTop?: number;
    marginLeft?: number;
    marginRight?: number;

    margin?: string;
    marginBottom?: number;
    textAlign?: string;

    textDecoration?: string;
    textTransform?: "uppercase";

    backGround?: string;

    opacity?: string;
    borderColor?: string;
    textShadow?: string;
    fontFamily?: string;
    fontStyle?: "italic";
    hoverColor?: string;
    width?: "max-content";
};

export const StyledLabel = styled.span<LabelStyledProps>`
    line-height: ${({ lineHeight }): string => lineHeight};
    text-align: ${({ textAlign = "center" }): string => textAlign};
    letter-spacing: ${({ letterSpacing }): string => letterSpacing || ""};
    color: ${({ color }): string => color};
    font-size: ${({ fontSize }): string => `${fontSize.toString()}px`};
    font-weight: ${({ fontWeight }): string => `${fontWeight.toString()}`};
    font-family: ${({ fontFamily }): string => fontFamily || ""};
    font-style: ${({ fontStyle }): string => fontStyle || ""};

    width: ${({ width }): string => (width ? width : "")};
    margin-top: ${({ marginTop = 0 }): string => `${marginTop.toString()}px`};
    margin-left: ${({ marginLeft = 0 }): string =>
        `${marginLeft.toString()}px`};
    margin-right: ${({ marginRight = 0 }): string =>
        `${marginRight.toString()}px`};
    margin-bottom: ${({ marginBottom }): string =>
        marginBottom ? `${marginBottom.toString()}px` : ""};
    margin: ${({ margin }): string => (margin ? margin : "")};

    text-decoration: ${({ textDecoration = "none" }): string =>
        `${textDecoration}`};
    text-transform: ${({ textTransform }): string => textTransform || "unset"};
    background-color: ${({ backGround }): string => backGround || ""};

    opacity: ${({ opacity }): string => (opacity ? opacity : "")};
    text-shadow: ${({ textShadow }): string => (textShadow ? textShadow : "")};

    &:hover,
    &:focus {
        color: ${({ hoverColor }): string => hoverColor || ""};
    }
`;
