import styled from "styled-components";
import { Colors } from "../../../../../utils/colors";
import { MediaScreen } from "../../../../../utils/media";
import { WrapperBoxStyled } from "../../../../wrapper-box/wrapper.styles";

type BottonNavItemProps = {
    isActive: boolean;
};

export const NavItemWrapper = styled.div<BottonNavItemProps>`
    position: relative;
    border-bottom: 1px solid ${Colors.GREY_BORDER_TOP};
    padding: 10px;
    color: ${Colors.WHITE};
    transition: color 200ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
    
  
    ${({ isActive }) =>
        isActive &&
        ` color: ${Colors.ORANGE};

       &:after {
        position: absolute;
        pointer-events: none;
        content: "";
        display: block;
        bottom: -19px;
        left: 30%;
        width: 17px;
        height: 23px;
        background-color: ${Colors.BROWN_BLACK};
        background-image: url(/images/bottom-nav/arrow-down.svg);

        background-size: 100% auto;
        background-position: 100% 100%;
        background-repeat: no-repeat;
        
    `}

    &:hover,
    &:focus {
        color: ${Colors.ORANGE};
        &:after {
            position: absolute;
            pointer-events: none;
            content: "";
            display: block;
            bottom: -15px;
            left: 30%;
            width: 17px;
            height: 23px;
            background: ${Colors.BROWN_BLACK};
            background-image: url("/images/bottom-nav/arrow-down.svg");
                background-repeat: no-repeat
            ;
    }
`;

export const HeaderWrapper = styled(WrapperBoxStyled)`
    @media (${MediaScreen.MOBILE}) {
        display: flex;
        justify-content: center;
    }
`;
