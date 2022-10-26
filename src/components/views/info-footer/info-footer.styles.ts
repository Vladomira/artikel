import styled from "styled-components";
import { Colors } from "../../../utils/colors";
import { MediaScreen } from "../../../utils/media";
import { StyledLabel } from "../../label/label.styles";
import { WrapperBoxStyled } from "../../wrapper-box/wrapper.styles";

export const InfoFooterWrapper = styled(WrapperBoxStyled)`
    justify-content: space-between;

    @media (${MediaScreen.MOBILE}) {
        flex-direction: column;
        justify-content: center;
    }
`;
export const LabelWithDecor = styled(StyledLabel)`
    display: flex; 
    align-items: center;

    &:before{
            content: '';
            display: block;
            margin: 0px 15px;
            background: ${Colors.GREY};
            width: 1px;
            height 14px;

        }
`;
