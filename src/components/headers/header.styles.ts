import styled from "styled-components";

type HeaderStyledProps = {
    color: string;
    fontSize: number;
    fontWeight: number;
    lineHeight?: string;
    textTransform: "uppercase";
    textAlign: string;
    whiteSpace: string;
    hoverColor?: string;
    display?: string;
    alignItems?: string;
    marginRight?: number;
};

export const HeaderStyled = styled.h2<HeaderStyledProps>`
    display: ${({ display }): string => (display ? display : "")};
    align-items: ${({ alignItems }): string => alignItems || ""};
    margin-right: ${({ marginRight }): string =>
        marginRight ? `${marginRight}px` : ""};

    text-align: ${({ textAlign }): string => textAlign || ""};
    color: ${({ color }): string => color || ""};
    font-size: ${({ fontSize }): string => `${fontSize.toString()}px`};
    font-weight: ${({ fontWeight }): string =>
        fontWeight ? `${fontWeight.toString()}` : "300"};
    line-height: ${({ lineHeight }): string => lineHeight || ""};
    text-transform: ${({ textTransform }): string => textTransform || ""};
    white-space: ${({ whiteSpace }): string => whiteSpace || ""};
    transition: 0.2s linear;

    &:hover,
    &:focus {
        color: ${({ hoverColor }) => hoverColor || ""};
    }
`;
