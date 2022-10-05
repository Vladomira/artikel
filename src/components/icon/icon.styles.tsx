import styled from "styled-components";

type IconProps = {
    cursor?: string;
    position?: "relative";
    marginLeft?: number;
    background?: string;
    width?: number;
    height?: number;
    direction?: string;
};

export const IconWrapper = styled.div<IconProps>`
    display: flex;
    flex-direction: ${({ direction }): string => (direction ? direction : "")};
    justify-content: center;
    align-items: center;

    width: ${({ width }): string => (width ? `${width}px` : "")};
    height: ${({ height }): string => (height ? `${height}px` : "")};
    line-height: 0;
    position: ${({ position }): string | undefined => position};
    background: ${({ background }): string => (background ? background : "")};
    &:hover {
        cursor: ${({ cursor }): string => (cursor ? "pointer" : "default")};
    }
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
`;
