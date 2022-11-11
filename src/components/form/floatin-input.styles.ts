import { Input, Form } from "antd";
import styled from "styled-components";
import { Colors } from "../../utils/colors";
import { MediaScreen } from "../../utils/media";
import { WrapperBoxStyled } from "../wrapper-box/wrapper.styles";

type InputWrapperProps = { boxwidth: string };

export const InputBoxItem = styled(Form.Item)<InputWrapperProps>`
    width: ${({ boxwidth }) => (boxwidth ? boxwidth : "")};
    margin-bottom: 0px;
`;

type StyledLabelProps = {
    active: boolean | string;
    value?: string;
    activeColor?: string;
    mobileLabelLeft?: string;
};

export const FloatingLabelStyled = styled.label<StyledLabelProps>`
    position: absolute;
    z-index: 1;
    top: ${({ active, value }): string => (active || value ? "4px" : "55%")};

    font-family: Merriweather Sans, sans-serif;
    font-size: ${({ active, value }): string =>
        active || value ? "12px" : "14px"};
    font-weight: 300;
    line-height: 1.2;
    pointer-events: none;
    color: ${({ active, value }): string =>
        !active && value ? "teal" : "white"};
    transform: translateY(-35%);
    transition: 0.2s ease all;

    ${({ active, value, activeColor }) => {
        if (value && !active) {
            return `color:transparent`;
        }
        if ((active && activeColor) || (value && activeColor)) {
            return `color:${activeColor}`;
        }
        if (active || value) {
            return `color:${Colors.BLUE}`;
        }
    }}

    @media (${MediaScreen.MOBILE}) {
        left: 0px;
    }
    @media (${MediaScreen.MOBILE}) {
        left: ${({ mobileLabelLeft }) =>
            mobileLabelLeft ? mobileLabelLeft : ""};
    }
`;

export const FloatingInput = styled(Input)`
    width: 100%;
    height: 42px;
    padding: 16px 0px 2px;

    font-family: Merriweather Sans, sans-serif;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.2;
    letter-spacing: 0.03em;

    background-color: transparent;
    border-width: 0;
    outline: none;
    color: ${Colors.WHITE};
`;

export const InputWrapper = styled(WrapperBoxStyled)<StyledLabelProps>`
    width: 100%;
    border-bottom: 1px solid ${Colors.WHITE};

    ${({ active, value, activeColor }) => {
        if ((active && activeColor) || (value && activeColor)) {
            return `border-bottom: 1px solid ${activeColor}`;
        }
        if (active || value) {
            return `border-bottom: 1px solid ${Colors.BLUE}`;
        }
    }}
`;
