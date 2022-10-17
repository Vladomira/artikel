import styled from "styled-components";
import { WrapperBoxStyled } from "./wrapper.styles";

export type WrapperBoxProps = {
    position?: string;
    top?: string;
    backImg: string;
};

export const BoxWithImg = styled(WrapperBoxStyled)<WrapperBoxProps>`
    position: ${({ position }): string => position || ""};
    top: ${({ top }): string => top || ""};

    &:before {
        position: absolute;
        content: "";
        display: block;
        top: 0px;
        left: 0px;
        width: 330px;
        background-image: ${({ backImg }) => backImg};
        bottom: 0px;

        background-size: 100% auto;
        background-repeat: no-repeat;
        background-position: 0 100%;
        z-index: 0;
    }
`;
