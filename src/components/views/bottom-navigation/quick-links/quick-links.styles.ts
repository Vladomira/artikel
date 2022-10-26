import styled from "styled-components";
import { MediaScreen } from "../../../../utils/media";
import { List, ListItem } from "../../../list";
import { WrapperBoxStyled } from "../../../wrapper-box/wrapper.styles";

export const QuickLinksWrapper = styled(WrapperBoxStyled)`
    @media (${MediaScreen.MOBILE}) {
        margin: 0 auto;
    }
`;
export const QuickLinksSectionWrapper = styled(WrapperBoxStyled)`
    @media (${MediaScreen.MOBILE}) {
        margin: 200px auto 0px;
    }
    @media (${MediaScreen.DESKTOP}) {
        margin-left: 40px;
    }
`;
export const QuickLinksList = styled(List)`
    display: flex;
    flex-direction: column;

    @media (${MediaScreen.MOBILE}) {
        margin: 0 auto;
    }
`;
export const QuickLinksItem = styled(ListItem)`
    @media (${MediaScreen.MOBILE}) {
        justify-content: center;
    }
`;
