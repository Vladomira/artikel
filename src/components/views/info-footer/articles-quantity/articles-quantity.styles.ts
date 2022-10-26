import styled from "styled-components";
import { MediaScreen } from "../../../../utils/media";
import { BottomHeaderStyled } from "../../../headers/header.styles";
import { List } from "../../../list";
import { WrapperBoxStyled } from "../../../wrapper-box/wrapper.styles";

export const ArticleswQuantityWrpper = styled(WrapperBoxStyled)`
    @media (${MediaScreen.DESKTOP}) {
        margin-left: 4vw;
    }
    @media (${MediaScreen.MOBILE}) {
        flex-direction: column;
        margin-top: 50px;
    }
`;
export const ArticlesHeader = styled(BottomHeaderStyled)`
    @media (${MediaScreen.MOBILE}) {
        text-align: center;
    }
`;

export const ArticlesList = styled(List)`
    @media (${MediaScreen.MOBILE}) {
        justify-content: center;
    }
`;
