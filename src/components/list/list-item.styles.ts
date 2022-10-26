import styled from "styled-components";
import { Colors } from "../../utils/colors";
type ListItemProps = {
    flexBasis?: string;
    padding?: string;
    jConten?: string;
    alignItems?: string;
    width?: number;
    height?: number;
    direction?: string;
    marginTop?: number;
    marginLeft?: number;
    marginRightNotLast?: number;
    borderBottomNLast?: string;
    marginBottomNotLast?: number;

    border?: string;
    background?: string;
    borderRadius?: number;
    position?: string;
    boxShadow?: string;
    radius?: string;
    borderBottom?: string;
    onClick?: (prop: boolean) => void;
    hoverColor?: string;
    cursor?: string;
    borderTop?: string;
};
export const ListItem = styled.li<ListItemProps>`
    display: flex;
    position: ${({ position }): string => (position ? position : "")};
    align-items: ${({ alignItems }): string =>
        alignItems ? `${alignItems}` : ""};
    justify-content: ${({ jConten }): string => (jConten ? `${jConten}` : "")};
    flex-direction: ${({ direction }): string =>
        direction ? `${direction}` : ""};

    width: ${({ width }): string => (width ? `${width.toString()}px` : "")};
    height: ${({ height }): string => (height ? `${height.toString()}px` : "")};
    margin-top: ${({ marginTop }): string =>
        marginTop ? `${marginTop.toString()}px` : ""};
            margin-left: ${({ marginLeft }): string =>
                marginLeft ? `${marginLeft.toString()}px` : ""};
    flex-basis: ${({ flexBasis }): string =>
        flexBasis ? `calc(${flexBasis})` : ""};
    padding: ${({ padding }): string => (padding ? `${padding}` : "")};
    background: ${({ background }): string => (background ? background : "")};

    border-top:${({ borderTop }): string => (borderTop ? borderTop : "")};
    border-bottom: ${({ borderBottom }): string =>
        borderBottom ? `1px solid ${borderBottom}` : ""};
    border: ${({ border }): string => (border ? `${border}` : "")};
    border-radius: ${({ borderRadius }): string =>
        borderRadius ? `${borderRadius}px` : ""};
        border-radius:${({ radius }): string => radius || ""}};
    color: ${({ color }): string => color || ""};
    box-shadow: ${({ boxShadow }): string => (boxShadow ? boxShadow : "")};
    transition: all 200ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
    cursor: ${({ cursor }): string => (cursor ? cursor : "")};

    &:hover {
        color: ${({ hoverColor }): string => hoverColor || ""};
    }
    
    &:not(:last-child) {
        margin-right: ${({ marginRightNotLast }): string =>
            marginRightNotLast ? `${marginRightNotLast}px` : ""};
        border-bottom: ${({ borderBottomNLast }): string =>
            `1px solid ${borderBottomNLast}` || ""};
        margin-bottom: ${({ marginBottomNotLast }): string =>
            marginBottomNotLast ? `${marginBottomNotLast}px` : ""};
    }
`;

export const ListItemDecorated = styled(ListItem)`

    &:before {
            content: '';
            display: block;
            right: 16px;
            margin-right: 16px;        
            background: ${Colors.GREY};
            width: 1px;
            height 14px;
        }
    
} `;
