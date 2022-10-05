import styled from "styled-components";

export type StyledTitleProps = {
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

    textTransform?: "uppercase";

    fontFamily?: string;
};

export const StyledTitle = styled.h2<StyledTitleProps>`
    line-height: ${({ lineHeight }): string => lineHeight};
    color: ${({ color }): string => color};
    font-size: ${({ fontSize }): string => `${fontSize.toString()}px`};
    font-weight: ${({ fontWeight }): string => `${fontWeight.toString()}`};
    font-family: ${({ fontFamily }): string => fontFamily || ""};

    margin-top: ${({ marginTop = 0 }): string => `${marginTop.toString()}px`};
    margin-left: ${({ marginLeft = 0 }): string =>
        `${marginLeft.toString()}px`};
    margin-right: ${({ marginRight = 0 }): string =>
        `${marginRight.toString()}px`};
    margin-bottom: ${({ marginBottom }): string =>
        marginBottom ? `${marginBottom.toString()}px` : ""};
    margin: ${({ margin }): string => (margin ? margin : "")};

    text-transform: ${({ textTransform }): string => textTransform || ""};
`;
