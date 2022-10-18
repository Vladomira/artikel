import styled from "styled-components";

export type LabelStyledProps = {
    color: string;
    fontSize: number;
    fontWeight: number;
    lineHeight: string;
    letterSpacing?: string;

    marginTop?: number;
    marginLeft?: number;
    marginRight?: number;

    margin?: string;
    marginBottom?: number;
    textAlign?: string;

    textDecoration?: "underline";
    textTransform?: "uppercase";

    backGround?: string;

    opacity?: string;
    borderColor?: string;
    textShadow?: string;
    fontFamily?: string;
    fontStyle?: "italic";
    hoverColor?: string;
    width?: "max-content";
    cursor?: string;
    whiteSpace?: "nowrap" | "inherit" | string;
};

export const StyledLabel = styled.span<LabelStyledProps>`
    line-height: ${({ lineHeight }): string => lineHeight || "1.4"};
    text-align: ${({ textAlign = "center" }): string => textAlign};
    letter-spacing: ${({ letterSpacing }): string => letterSpacing || ""};
    color: ${({ color }): string => color};
    font-size: ${({ fontSize }): string => `${fontSize.toString()}px`};
    font-weight: ${({ fontWeight }): string =>
        fontWeight ? `${fontWeight.toString()}` : "300"};
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
    white-space: ${({ whiteSpace }): string => (whiteSpace ? whiteSpace : "")};
    background-color: ${({ backGround }): string => backGround || ""};

    opacity: ${({ opacity }): string => (opacity ? opacity : "")};
    text-shadow: ${({ textShadow }): string => (textShadow ? textShadow : "")};
    cursor: ${({ cursor }): string => (cursor ? cursor : "")};

    &:hover {
        color: ${({ hoverColor }): string => hoverColor || ""};
    }
`;
