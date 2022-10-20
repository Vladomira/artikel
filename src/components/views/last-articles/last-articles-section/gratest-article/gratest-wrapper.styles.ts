import styled from "styled-components";
import { MediaScreen } from "../../../../../utils/media";
import { WrapperBoxStyled } from "../../../../wrapper-box/wrapper.styles";

type MobileWrapperProps = {
    marginBottomMobile?: number;
    marginDesctop?: string;
};
export const GratestWrapper = styled(WrapperBoxStyled)<MobileWrapperProps>`
    @media (${MediaScreen.MOBILE}) {
        min-width: 460px;
        flex-direction: column;
        margin-bottom: ${({ marginBottomMobile }) =>
            marginBottomMobile ? `${marginBottomMobile}px` : ""}};
    }

    @media (${MediaScreen.DESKTOP}) {        
        margin: ${({ marginDesctop }) => (marginDesctop ? marginDesctop : "")}};
        // min-width: 770px;
    }
`;
