import styled from "styled-components";
import { Colors } from "../../../../utils/colors";
import { List, ListItem } from "../../../list";

type Props = {
    isActive: boolean;
};

export const BottomNavItem = styled(ListItem)<Props>`
    width: 120px;
    position: relative;
    align-content: stretch;
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
          top: 5px;
          right: -11px;
          width: 17px;
          height: 23px;
          background: ${Colors.BROWN_BLACK};
          background-image: url("/images/bottom-nav/chapter-arrow.svg");
      
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
            top: 5px;
            right: -11px;
            width: 17px;
            height: 23px;
            background: ${Colors.BROWN_BLACK};
            background-image: url("/images/bottom-nav/chapter-arrow.svg");
        
            background-repeat: no-repeat
            ;
    }
`;
export const BottomListStyled = styled(List)`
    max-width: 120px;
    flex-shrink: 0;
    align-content: stretch;
    border-right: 1px solid ${Colors.GREY_BORDER_TOP};
`;
export const BottomTopicItem = styled(ListItem)`
    height: 31px;
    max-width: 111px;
    width: 100%;
`;
export const BottomTopicList = styled(List)`
    width: 280px;
    max-width: 100%;
    max-height: 221px;
`;
