import styled from "styled-components";

export type ListProps = {
    borderBottom?: string;
    margin?: string;
    padding?: string;
    marginTop?: string;
    marginLeft?: string;
    marginRight?: number;
    flexWrap?: string;
    display?: string;
    jConten?: string;
    alignItems?: string;
    direction?: string;
    background?: string;
    overflow?: string;
};

export const List = styled.ul<ListProps>`
    display: ${({ display }): string => (display ? `${display}` : "")};
    flex-wrap: ${({ flexWrap }): string => (flexWrap ? `${flexWrap}` : "")};
    justify-content: ${({ jConten }): string => (jConten ? `${jConten}` : "")};
    align-items: ${({ alignItems }): string =>
        alignItems ? `${alignItems}` : ""};
    flex-direction: ${({ direction }): string =>
        direction ? `${direction}` : ""};
    margin-top: ${({ marginTop }): string =>
        marginTop ? `${marginTop}px` : ""};
    margin-left: ${({ marginLeft }): string =>
        marginLeft ? `${marginLeft}px` : ""};
    margin-right: ${({ marginRight }): string =>
        marginRight ? `${marginRight}px` : ""};
    margin: ${({ margin }): string => (margin ? margin : "")};

    padding: ${({ padding }): string => (padding ? `${padding}` : "")};

    background: ${({ background }): string => (background ? background : "")};
    overflow: ${({ overflow }): string => (overflow ? `${overflow}` : "auto")};
`;
