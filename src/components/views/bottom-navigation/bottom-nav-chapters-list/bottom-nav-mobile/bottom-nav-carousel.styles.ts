import { Carousel } from "antd";
import styled from "styled-components";
import { Colors } from "../../../../../utils/colors";
import { MediaScreen } from "../../../../../utils/media";

export const CarouselWrapper = styled.div`
    width: 100%;
    position: relative;
    // overflow:hidden;
    height: 100px;
    @media (${MediaScreen.DESKTOP}) {
        display: none;
    }

    &:before {
        position: absolute;
        pointer-events: none;
        content: "";
        display: block;
        left: 0;
        width: 8%;
        max-width: 100%;
        height: 100%;
        background-image: linear-gradient(90deg, #121212, transparent);
        pointer-events: none;
        z-index: 1;
    }
    &:after {
        position: absolute;
        pointer-events: none;
        content: "";
        display: block;
        right: 0;
        width: 8%;
        top: 0;
        max-width: 100%;
        height: 100%;
        background-image: linear-gradient(270deg, #121212, transparent);
        pointer-events: none;
        z-index: 1;
    }
`;

type BottomCarouselProps = {};
export const BottomCarousel = styled(Carousel)<BottomCarouselProps>``;
