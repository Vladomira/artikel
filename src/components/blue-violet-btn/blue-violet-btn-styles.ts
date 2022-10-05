import styled from "styled-components";
import { Colors } from "../../utils/colors";
import { ButtonStyled } from "../button/button.styles";

export type BlueVioletBtnProps = { maxHeight?: string };

export const BlueVioletBtn = styled(ButtonStyled)<BlueVioletBtnProps>`
    max-height: ${({ maxHeight }): string => maxHeight || ""};
    background: ${Colors.BLUE_VIOLET};

    &:hover,
    &:focus {
        background: ${Colors.LIGHT_VIOLET};
    }
`;
