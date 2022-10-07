import styled from "styled-components";

export type ParagraphStyledProps = {
    color: string;
    fontSize: number;
    fontWeight: number;
    fontFamily?: string;
    fontStyle?: "italic";
    lineHeight: string;
    letterSpacing?: string;
    textDecoration?: "underline";
    textAlign?: string;
    marginLeft?: number;
};

export const StyledParagraph = styled.p<ParagraphStyledProps>`
    line-height: ${({ lineHeight }): string => lineHeight || "1.4"};
    text-align: ${({ textAlign = "center" }): string => textAlign};
    letter-spacing: ${({ letterSpacing }): string => letterSpacing || ""};
    color: ${({ color }): string => color};
    font-size: ${({ fontSize }): string => `${fontSize.toString()}px`};
    font-weight: ${({ fontWeight }): string =>
        fontWeight ? `${fontWeight.toString()}` : "300"};
    font-family: ${({ fontFamily }): string => fontFamily || ""};
    font-style: ${({ fontStyle }): string => fontStyle || ""};
    text-decoration: ${({ textDecoration = "none" }): string =>
        `${textDecoration}`};
    margin-left: ${({ marginLeft }): string =>
        marginLeft ? `${marginLeft}px` : ""};
`;
