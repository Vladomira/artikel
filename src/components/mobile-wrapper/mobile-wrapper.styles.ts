import styled from "styled-components";
import { MediaScreen } from "../../utils/media";
import { WrapperBoxStyled } from "../wrapper-box/wrapper.styles";

type MobileWrapperProps = {
    marginBottomMobile?: number;
    marginDesctop?: string;
};
export const MobileWrapperColumn = styled(WrapperBoxStyled)<MobileWrapperProps>`
    @media (${MediaScreen.MINI_MOBILE}) {
        flex-direction: column;
        margin-bottom: ${({ marginBottomMobile }) =>
            marginBottomMobile ? `${marginBottomMobile}px` : ""}};
    }

    @media (${MediaScreen.TABLET}) {        
        margin: ${({ marginDesctop }) => (marginDesctop ? marginDesctop : "")}};
    }
`;
