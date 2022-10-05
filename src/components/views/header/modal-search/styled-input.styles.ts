import styled from "styled-components";
import { Colors } from "../../../../utils/colors";

type StyledInputProps = {
    borderBottom: string;
    textColor?: string;
    padding: string;
    width?: string;
    height?: string;
};
export const StyledInput = styled.input<StyledInputProps>`
    width: ${({ width }): string => width || "100%"};
    height: ${({ height }): string => height || "42px"};
    border: none;
    border-bottom: ${({ borderBottom }): string => `1px solid ${borderBottom}`};
    outline: none;
    background-color: transparent;
    padding: ${({ padding }): string => (padding ? padding : "16px 0 2px")};

    font-family: Merriweather Sans, sans-serif;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.03em;
    color: ${({ textColor }): string => textColor || `${Colors.WHITE}`};
`;
