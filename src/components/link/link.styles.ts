import styled from "styled-components";

export type LinkStyledProps = {
    color: string;
    fontSize: number;
    fontWeight: number;
    fontFamily?: string;
    fontStyle?: "italic";
    lineHeight?: string;
    letterSpacing?: string;
    textDecoration?: "underline" | "none";
    hoverColor?: string;
    cursor?: string;
    padding?: string;
    height?: number;
};

export const LinkStyled = styled.a<LinkStyledProps>`
    padding: ${({ padding }): string => padding || ""};

    height: ${({ height }): string => (height ? `${height}px` : "")};
    line-height: ${({ lineHeight }): string => lineHeight || "1.4"};
    letter-spacing: ${({ letterSpacing }): string => letterSpacing || ""};
    color: ${({ color }): string => color};
    font-size: ${({ fontSize }): string => `${fontSize.toString()}px`};
    font-weight: ${({ fontWeight }): string =>
        fontWeight ? `${fontWeight.toString()}` : "300"};
    font-family: ${({ fontFamily }): string => fontFamily || ""};
    font-style: ${({ fontStyle }): string => fontStyle || ""};
    text-decoration: ${({ textDecoration = "none" }): string =>
        `${textDecoration}`};
    cursor: ${({ cursor }): string => (cursor ? cursor : "")};
    &:hover {
        color: ${({ hoverColor }): string => hoverColor || ""};
    }
`;

export type PureLinkStyledProps = {
    width: string;
    height: string;
};
export const PureLinkStyled = styled.a<PureLinkStyledProps>``;
