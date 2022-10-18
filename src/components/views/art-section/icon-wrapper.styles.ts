import styled from "styled-components";
import { SectionStyled } from "../../section/section.styles";
import { WrapperBoxStyled } from "../../wrapper-box/wrapper.styles";

export const ArtWrapper = styled(WrapperBoxStyled)`
    width: 100%;
    margin: 0 auto;
    max-width: 1160px;
`;

export const ArtIconWrapper = styled(WrapperBoxStyled)`
    width: 100%;
    max-width: 972px;
`;
export const ArtSection = styled(SectionStyled)`
    @media (max-width: 765px) {
        margin-top: 220px;
    }
`;
