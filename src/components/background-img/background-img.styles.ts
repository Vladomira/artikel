import styled from "styled-components";

export type BackgroundImagProps = {
    position?: string;
    height?: string;
    backImg: string;
    padding?: string;
    maxWidth?: number;
    top?: string;

    backgroundSize?: string;
};

export const BackgroundImagBox = styled.div<BackgroundImagProps>`
    position: ${({ position }) => (position ? position : "")};
    top: ${({ top }) => (top ? top : "")};
    z-index: 2;
    width: 100%;
    height: ${({ height }) => (height ? height : "")};
    padding: ${({ padding }) => (padding ? padding : "")};

    background-size: ${({ backgroundSize }): string => backgroundSize || ""};
    background-repeat: no-repeat;
    background-position: 0 100%;
    // background: black;
    background-image: ${({ backImg }) => backImg};
`;
