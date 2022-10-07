import styled from "styled-components";

export type WrapperBoxProps = {
    marginTop?: number;
    marginLeft?: number;
    marginBottom?: number;
    margin?: string;
    padding?: string;
    direction?: string;
    justifyContent?: string;
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
    right: ${({ right }): string => right || ""};
    left: ${({ left }): string => left || ""};

    display: flex;
    justify-content: ${({ justifyContent }): string =>
        justifyContent ? `${justifyContent}` : ""};
    align-items: ${({ alignItems }): string =>
        alignItems ? `${alignItems}` : ""};
    flex-direction: ${({ direction }): string => direction || ""};
    padding: ${({ padding }): string => (padding ? padding : "")};

    width: ${({ width }): string => (width ? width : "")};
    max-width: ${({ maxWidth }): string => (maxWidth ? `${maxWidth}px` : "")};
    height: ${({ height }): string => (height ? `${height}px` : "")};

    margin-top: ${({ marginTop }): string =>
        marginTop ? `${marginTop}px` : ""};
    margin-left: ${({ marginLeft }): string =>
        marginLeft ? `${marginLeft}px` : ""};
    margin-bottom: ${({ marginBottom }): string =>
        marginBottom ? `${marginBottom}px` : ""};
    margin: ${({ margin }): string => (margin ? margin : "")};

    background: ${({ background }) => (background ? background : "")};
    z-index: ${({ zIndex }) => (zIndex ? zIndex : "")};
`;
