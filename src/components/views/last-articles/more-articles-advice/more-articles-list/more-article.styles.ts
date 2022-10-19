import styled from "styled-components";
import { MediaScreen } from "../../../../../utils/media";
import { WrapperBoxStyled } from "../../../../wrapper-box/wrapper.styles";

export const MoreArticleWrapper = styled(WrapperBoxStyled)`
    @media (${MediaScreen.TABLET}) {
        margin-left: 30px;
    }
`;
