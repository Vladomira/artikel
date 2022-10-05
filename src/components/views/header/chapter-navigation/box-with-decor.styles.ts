import styled from "styled-components";
import { Colors } from "../../../../utils/colors";
import { WrapperBoxStyled } from "../../../wrapper-box/wrapper.styles";

export const BoxWithDecoration = styled(WrapperBoxStyled)`
    display: flex;
    align-items: center;

    &:before {
        content: "";
        display: block;
        width: 1px;
        height: 26px;

        margin-right: 8px;
        margin-right: 15px;

        background: ${Colors.GREY_VARIANT};
    }
`;
