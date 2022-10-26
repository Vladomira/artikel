import styled from "styled-components";

type JustifyContent =
    | "center"
    | "end"
    | "space-between"
    | "space-around"
    | "start";
export type WrapperBoxProps = {
    marginTop?: number;
    marginLeft?: number;
    marginBottom?: number;
    margin?: string;
    padding?: string;
    direction?: string;
    justifyContent?: JustifyContent | string;

    alignItems?: string;
    width?: string;
    background?: string;
    height?: number;
    maxWidth?: number;
    mediaHidden?: string;
    position?: string;
    top?: string;
    right?: string;
    left?: string;
    onClick?: () => void;
    zIndex?: number;
    boxShadow?: string;
    borderBottom?: string;
    bottom?: string;
    minWidth?: string;
    borderTop?: string;
    overflow?: string;
};

export const WrapperBoxStyled = styled.div<WrapperBoxProps>`
    ${({ mediaHidden }) =>
        mediaHidden &&
        ` @media (${mediaHidden}) {
    display: none;
}
    `}
    position:${({ position }): string => position || ""};
    top: ${({ top }): string => top || ""};
    bottom: ${({ bottom }): string => (bottom ? bottom : "")};
    right: ${({ right }): string => (right ? right : "")};
    left: ${({ left }): string => (left ? left : "")};

    display: flex;
    justify-content: ${({ justifyContent }): string =>
        justifyContent ? `${justifyContent}` : ""};
    align-items: ${({ alignItems }): string =>
        alignItems ? `${alignItems}` : ""};
    flex-direction: ${({ direction }): string => direction || ""};
    padding: ${({ padding }): string => (padding ? padding : "")};

    width: ${({ width }): string => (width ? width : "")};
    min-width: ${({ minWidth }): string => minWidth || ""};
    max-width: ${({ maxWidth }): string => (maxWidth ? `${maxWidth}px` : "")};
    height: ${({ height }): string => (height ? `${height}px` : "")};

    margin-top: ${({ marginTop }): string =>
        marginTop ? `${marginTop}px` : ""};
    margin-left: ${({ marginLeft }): string =>
        marginLeft ? `${marginLeft}px` : ""};
    margin-bottom: ${({ marginBottom }): string =>
        marginBottom ? `${marginBottom}px` : ""};
    margin: ${({ margin }): string => (margin ? margin : "")};

    border-bottom: ${({ borderBottom }): string =>
        borderBottom ? borderBottom : ""};
    border-top: ${({ borderTop }): string => (borderTop ? borderTop : "")};

    background: ${({ background }) => (background ? background : "")};
    box-shadow: ${({ boxShadow }) => (boxShadow ? boxShadow : "")};
    overflow: ${({ overflow }) => overflow || ""};
    z-index: ${({ zIndex }) => (zIndex ? zIndex : "")};
`;
