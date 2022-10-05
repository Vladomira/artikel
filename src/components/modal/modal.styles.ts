import styled from "styled-components";
import { Colors } from "../../utils/colors";

export type StyledModalProps = {
    padding?: string;
    paddingTop?: number;
    paddingLeft?: string;
    paddingRight?: string;
    backImg?: string;
    mediaHidden?: string;
    opacity?: number;
    secondImg?: string;
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
    padding-top: ${({ paddingTop }): string => `${paddingTop}px` || ""};
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

    &:after {
        position: absolute;
        content: "";
        display: block;
        width: 330px;
        height: 330px;
        background-image: ${({ backImg }) => backImg};
        bottom: 0;
        left: 0;
        opacity: ${({ opacity }): number => opacity || 0.5};

        background-size: 100% auto;
        background-repeat: no-repeat;
        z-index: -1;
        background-position: 0 100%;
    }

    &:before {
        position: absolute;
        content: "";
        display: block;
        width: 330px;
        height: 330px;
        background-image: ${({ secondImg }) => secondImg};
        bottom: 0;
        right: 0;
        opacity: ${({ opacity }): number => opacity || 0.5};

        background-size: auto 100%;
        background-repeat: no-repeat;
        z-index: -1;
        background-position: 100% 0;
    }
`;
