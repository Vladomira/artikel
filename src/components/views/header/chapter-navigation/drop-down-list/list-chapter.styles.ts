import styled from "styled-components";
import { Colors } from "../../../../../utils/colors";
import { List, ListItem } from "../../../../list";

type ChapterListProps = {
    isActive: boolean;
};
export const ListChapterStyled = styled(List)<ChapterListProps>`
    width: 100%;
    min-width: 150px;
    border-right: ${({ isActive }): string =>
        isActive ? `1px solid ${Colors.GREY_VARIANT}` : ""};
`;

export const ListItemChapterStyled = styled(ListItem)<ChapterListProps>`
    position: relative;
    transition: all 200ms cubic-bezier(0.17, 0.67, 0.83, 0.67);

    ${({ isActive }) =>
        isActive
            ? `
        border-bottom: 1px solid ${Colors.GREY_VARIANT};
        
                `
            : ` border-top: 1px solid ${Colors.GREY_VARIANT};`};
    position: relative;

    &:hover, &:focus{
        &:after {
            position: absolute;
            pointer-events: none;
            content: "";
            display: block;
            top: 15px;
            right: -11px;
            width: 17px;
            height: 23px;
        
            background-image: url("/images/chapters/chapter-arrow.svg");
            background-color: ${Colors.WHITE};
        
            background-repeat: no-repeat;
    }

  
`;
