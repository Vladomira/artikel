import styled from "styled-components";

type HeaderStyledProps = {
    color: string;
    fontSize: number;
    fontWeight: number;
    lineHeight?: string;
    textTransform: "uppercase";
    textAlign: string;
    whiteSpace: string;
};

export const HeaderStyled = styled.h2<HeaderStyledProps>`
    text-align: ${({ textAlign }): string => textAlign || ""};
    color: ${({ color }): string => color || ""};
    font-size: ${({ fontSize }): string => `${fontSize.toString()}px`};
    font-weight: ${({ fontWeight }): string =>
        fontWeight ? `${fontWeight.toString()}` : "300"};
    line-height: ${({ lineHeight }): string => lineHeight || ""};
    text-transform: ${({ textTransform }): string => textTransform || ""};
    white-space: ${({ whiteSpace }): string => whiteSpace || ""};
`;
