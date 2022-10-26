import styled from "styled-components";
import { MediaScreen } from "../../../../utils/media";
import { WrapperBoxStyled } from "../../../wrapper-box/wrapper.styles";

export const BecomeWriterIMG = styled(WrapperBoxStyled)`
    position: relative;
    width: 270px;
    height: 310px;

    @media (${MediaScreen.MOBILE}) {
        margin: 50px auto;
    }

    &:before {
        position: absolute;
        pointer-events: none;
        content: "";
        display: block;
        bottom: 0;
        left: 0;
        width: 69px;
        height: 310px;
        background-image: url(/images/bottom-nav/colored-lines.svg);

        background-size: 100% auto;
        background-repeat: no-repeat;
        background-position: 0 100%;
    }
    &:after {
        position: absolute;
        pointer-events: none;
        content: "";
        display: block;
        bottom: 0;
        right: 0;
        width: 228px;
        height: 190px;
        background-image: url(/images/bottom-nav/pen-and-hand.png);

        background-size: 100% auto;
        background-repeat: no-repeat;
        background-position: 100% 100%;
    }
`;
