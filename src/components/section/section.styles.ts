import styled from "styled-components";
import { Colors } from "../../utils/colors";
import { SectionProps } from "./section";

export const SectionStyled = styled.section<SectionProps>`
    position: ${({ position }) => (position ? position : "")};
    top: ${({ top }) => (top ? `${top}px` : "")};
    min-width: ${({ minWidth }) => (minWidth ? minWidth : "")};
    width: ${({ width }) => (width ? width : "")};
    min-height: ${({ minHeight }) => minHeight || ""};
    height: ${({ height }) => (height ? height : height)};

    padding-top: ${({ paddingTop }) => `${paddingTop}px`};
    padding-bottom: ${({ paddingBottom }) =>
        paddingBottom ? `${paddingBottom}px` : ""};
    background-color: ${({ background }) =>
        background ? `${background}` : "#fff"};
    margin-bottom: ${({ marginBottom }) =>
        marginBottom ? `${marginBottom}px` : ""};
    margin-top: ${({ marginTop }) => (marginTop ? `${marginTop}px` : "")};

    border-top: ${({ borderColor }) => (borderColor ? `${borderColor}` : "")};
    border-bottom: ${({ borderColor }) =>
        borderColor ? `${borderColor}` : ""};
    border-bottom: ${({ borderBottom }) =>
        borderBottom ? `${borderBottom}` : ""};
    box-shadow: ${({ boxShadow }) => (boxShadow ? `${boxShadow}` : "")};
    border-top: ${({ borderTop }) => (borderTop ? `${borderTop}` : "")};
    border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "")};
`;

type TPseudoEl = { beforeElColor?: string };

export const SectionWithPseudoElement = styled(SectionStyled)<TPseudoEl>`
    position: relative;
    &::before {
        content: "";
        display: block;
        position: absolute;
        height: 43px;
        width: 2px;
        left: 17px;
        bottom: 0px;
        background-color: ${({ beforeElColor }): string =>
            beforeElColor ? beforeElColor : ""};
    }
`;

type TForBox = {
    borderBottom?: string;
    marginBottom?: number;
    paddingBottom?: number;
};
export const SectionHeaderBox = styled.div<TForBox>`
    display: flex;
    justify-content: space-between;
    margin-bottom: ${({ marginBottom }) =>
        marginBottom ? `${marginBottom}px` : ""};
    padding-bottom: ${({ paddingBottom }) =>
        paddingBottom ? `${paddingBottom}px` : ""};
    border-bottom: ${({ borderBottom }) =>
        borderBottom ? `${borderBottom}` : ""};
`;
export type SectionTitleProps = {
    marginBottom?: number;
    titleColor?: string;
    textAlign?: string;
};
export const SectionTitle = styled.p<SectionTitleProps>`
    margin-bottom: ${({ marginBottom }) =>
        marginBottom ? `${marginBottom}px` : ""};
    text-align: ${({ textAlign }) => (textAlign ? textAlign : "")};

    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
`;

export const SectionSubtitle = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: center;
    text-align: right;
`;
