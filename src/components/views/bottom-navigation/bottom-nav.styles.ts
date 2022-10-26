import styled from "styled-components";
import { MediaScreen } from "../../../utils/media";
import { SectionStyled } from "../../section/section.styles";
import { WrapperBoxStyled } from "../../wrapper-box/wrapper.styles";

export const SectionBottomWrapper = styled(SectionStyled)`
    position: relative;

    @media (${MediaScreen.DESKTOP}) {
        flex-direction: column;
    }

    &:after {
        position: absolute;
        pointer-events: none;
        content: "";
        display: block;
        bottom: 0;
        right: 0;
        width: 405px;
        height: 405px;
        background-image: url(/images/header/m_back.png);

        background-size: 100% auto;
        background-position: 100% 100%;
        background-repeat: no-repeat;
        z-index: 8;
    }
`;

export const GeneralInfoBox = styled(WrapperBoxStyled)`
    @media (${MediaScreen.MOBILE}) {
        flex-direction: column;
    }
`;
export const ListsInfoBox = styled(WrapperBoxStyled)`
    @media (${MediaScreen.MOBILE}) {
        flex-direction: column;
    }
`;
