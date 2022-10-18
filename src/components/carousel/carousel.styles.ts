import styled from "styled-components";
import { Carousel } from "antd";
import { DotStyle } from "./carousel-reset";
import { Colors } from "../../utils/colors";
import { ButtonStyled } from "../button/button.styles";

export const CarouselOuterWrapper = styled.div`
    position: relative;
    width: 100%;
`;
type CarouselWrapperProps = {
    marginRight?: number;
    dotColor?: string;
    left?: number;
    padding?: string;
    dotBottomPosition?: number;
    dotStyle?: DotStyle;
};
export const CarouselWrapper = styled(Carousel)<CarouselWrapperProps>`
box-shadow: 0 2px 10px rgb(0 0 0 / 15%);

@media (max-width: 765px}) {
    width: max-content;
    flex-direction: column;
    height: 100%;

   
}
@media (min-width: 765px}) {
    height: 330px;
}
> .slick-list .slick-track .slick-slide {
    max-width: 1160px;
    width: max-content;
   
    margin-right: ${({ marginRight = "0" }): string =>
        `${marginRight}px!important`};   
       
        @media (max-width: 765px) {
            width: 100%;
        }
    };
     
}

> .slick-dots li button {    
    width: 8px;
    height:8px;
    border-radius:100% !important;
    background:${Colors.GREY};
 
}


    > .slick-list .slick-track {
    display: flex;
}

@media (max-width: 765px) {
    .slick-dots-bottom {
        display: flex;
        align-items: center;
        max-width: 120px;
        height: 15px;
        position: absolute;
        justify-content: end !important;
        margin-right: auto;
        margin-left: auto;
       bottom: -30px;
        right: 0px !important;
    }
}

@media (min-width: 765px) {
    .slick-dots-bottom {
        display: flex;
        align-items: center;
        max-width: 120px;
        height: 15px;
        position: absolute;
        justify-content: end !important;
        margin-right: 0px;
        margin-left: auto;
        top: -35px;
        right: 0px !important;
    }
}


 

.slick-dots li {
    width: 8px;
    height:8px;  
    &:not(:last-child) {
                margin-right: 4px;
            }
}
> .slick-dots li.slick-active button {
        width: 8px ;
        height: 8px ;
        border-radius: 100% ;
        background:  ${Colors.BLACK};
    }

`;

export const ButtonToSlideStyled = styled(ButtonStyled)`
    top: 50%;
    z-index: 200;
`;
