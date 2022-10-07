import styled from "styled-components";
import { Colors } from "../../utils/colors";

export type StyledModalProps = {
    padding?: string;
    paddingTop?: string;
    paddingLeft?: string;
    paddingRight?: string;
    backImg?: string;
    mediaHidden?: string;
    opacity?: number;
    secondImg?: string;
    imgWidth?: string;
    imgHeight?: string;
    secondImgWidth?: string;
    secondImgHeight?: string;
};

export const StyledModal = styled.div<StyledModalProps>`
    position: fixed;
    display: flex;
    justify-content: center;

    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    padding-top: ${({ paddingTop }): string => paddingTop || ""};
    padding-left: ${({ paddingLeft }): string => paddingLeft || ""};
    padding-right: ${({ paddingRight }): string => paddingRight || ""};
    padding: ${({ padding }): string => padding || ""};
    background-color: ${Colors.BLACK};

    z-index: 1200;

    ${({ mediaHidden }) =>
        mediaHidden &&
        ` @media (${mediaHidden}) {
            display: none;
        }`}

    &:before {
        position: fixed;
        pointer-events: none;
        content: "";
        display: block;
        bottom: 0;
        left: 0;
        width: ${({ imgWidth }): string => (imgWidth ? imgWidth : "330px")};
        height: ${({ imgHeight }): string => (imgHeight ? imgHeight : "330px")};

        background-image: url(/images/header/back.png);

        opacity: ${({ opacity }): number => opacity || 0.5};

        background-size: 100% auto;
        background-repeat: no-repeat;
        background-position: 0 100%;
        z-index: -1;
    }
    &:after {
        position: fixed;
        pointer-events: none;
        content: "";
        display: block;
        bottom: 0;
        right: 0;
        width: ${({ secondImgWidth }): string =>
            secondImgWidth ? secondImgWidth : "330px"};
        height: ${({ secondImgHeight }): string =>
            secondImgHeight ? secondImgHeight : "330px"};
        background-image: ${({ secondImg }) => secondImg};

        opacity: ${({ opacity }): number => opacity || 0.5};

        background-size: 100% auto;
        background-position: 0 100%;
        background-repeat: no-repeat;
        z-index: -1;
    }
`;
