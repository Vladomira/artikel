import styled from "styled-components";
import { Colors } from "../../utils/colors";

type StyledInputProps = {
    padding?: string;
    width?: string;
    height?: string;
    display?: string;
    alignItems?: string;
    direction?: string;
    marginTop?: number;
};
export const StyledPureForm = styled.form<StyledInputProps>`
    display: ${({ display }): string => (display ? display : "")};
    flex-direction: ${({ direction }): string => (direction ? direction : "")};
    align-items: ${({ alignItems }): string => (alignItems ? alignItems : "")};
    margin-top: ${({ marginTop }): string =>
        marginTop ? `${marginTop}px` : ""};

    width: ${({ width }): string => width || ""};
    height: ${({ height }): string => height || ""};
    padding: ${({ padding }): string => (padding ? padding : "16px 0 2px")};
    background-color: transparent;
`;
