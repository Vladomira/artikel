import styled from "styled-components";
import { MediaScreen } from "../../../../utils/media";
import { ButtonStyled } from "../../../button/button.styles";
import { StyledPureForm } from "../../../form/pure-form.styles";

export const BottomForm = styled(StyledPureForm)`
    display: flex;
    align-items: end;
    @media (${MediaScreen.MOBILE}) {
        flex-direction: column;
        width: 100%;
        max-width: 430px;
        margin: 0 auto;
    }
`;
export const BottomFormButton = styled(ButtonStyled)`
    @media (${MediaScreen.MOBILE}) {
        width: 100%;
        margin: 25px auto 0px auto;
    }
`;
