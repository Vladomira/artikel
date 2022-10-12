import styled from "styled-components";

export type ListProps = {
    position?: string;
    top?: string;
    right?: string;
    left?: string;
    bottom?: string;

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
    boxShadow?: string;
    width?: string;
    zIndex?: number;
};

export const List = styled.ul<ListProps>`
    position: ${({ position }): string => position || ""};
    top: ${({ top }): string => top || ""};
    right: ${({ right }): string => right || ""};
    left: ${({ left }): string => left || ""};
    bottom: ${({ bottom }): string => bottom || ""};

    display: ${({ display }): string => (display ? `${display}` : "")};
    flex-wrap: ${({ flexWrap }): string => (flexWrap ? `${flexWrap}` : "")};
    justify-content: ${({ jConten }): string => (jConten ? `${jConten}` : "")};
    align-items: ${({ alignItems }): string =>
        alignItems ? `${alignItems}` : ""};
    flex-direction: ${({ direction }): string =>
        direction ? `${direction}` : ""};

    width: ${({ width }) => width || ""};
    margin-top: ${({ marginTop }): string =>
        marginTop ? `${marginTop}px` : ""};
    margin-left: ${({ marginLeft }): string =>
        marginLeft ? `${marginLeft}px` : ""};
    margin-right: ${({ marginRight }): string =>
        marginRight ? `${marginRight}px` : ""};
    margin: ${({ margin }): string => (margin ? margin : "")};

    padding: ${({ padding }): string => (padding ? `${padding}` : "")};

    background: ${({ background }): string => (background ? background : "")};
    box-shdow: ${({ boxShadow }): string => (boxShadow ? boxShadow : "")};
    overflow: ${({ overflow }): string => (overflow ? `${overflow}` : "auto")};
    z-index: ${({ zIndex }) => (zIndex ? zIndex : "")};
`;
