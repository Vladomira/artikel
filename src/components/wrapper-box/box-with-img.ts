import styled from "styled-components";
import { Colors } from "../../utils/colors";
import { WrapperBoxStyled } from "./wrapper.styles";

export type WrapperBoxProps = {
    position?: string;
    top?: string;
    backImg: string;
};

export const BoxWithImg = styled(WrapperBoxStyled)<WrapperBoxProps>`
    position: ${({ position }): string => position || ""};
    top: ${({ top }): string => top || ""};

    width: 100%;
    background: ${Colors.BLACK};

    &:before {
        position: absolute;
        content: "";
        display: block;
        width: 170px;
        height: 170px;
        background-image: ${({ backImg }) => backImg};
        bottom: 0px;

        background-size: 100% auto;
        background-repeat: no-repeat;
        background-position: 0 100%;
        z-index: 0;
    }
`;
