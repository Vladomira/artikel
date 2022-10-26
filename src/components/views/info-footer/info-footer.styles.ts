import styled from "styled-components";
import { MediaScreen } from "../../../utils/media";
import { WrapperBoxStyled } from "../../wrapper-box/wrapper.styles";

export const InfoFooterWrapper = styled(WrapperBoxStyled)`
    justify-content: space-between;

    @media (${MediaScreen.MOBILE}) {
        flex-direction: column;
        justify-content: center;
    }
`;
