import styled from "styled-components";

type InputLabelprops = {
    color: string;
    fontSize: number;
    fontWeight: number;
    lineHeight: string;
    letterSpacing?: string;
    textAlign?: string;
    textDecoration?: "underline";
    textTransform?: "uppercase";
    fontFamily?: string;
    fontStyle?: "italic";
    whiteSpace?: "nowrap" | "inherit" | string;
};
export const InputLabelStyled = styled.label<InputLabelprops>`
    line-height: ${({ lineHeight }): string => lineHeight || "1.4"};
    text-align: ${({ textAlign = "center" }): string => textAlign};
    letter-spacing: ${({ letterSpacing }): string => letterSpacing || ""};
    color: ${({ color }): string => color};
    font-size: ${({ fontSize }): string => `${fontSize.toString()}px`};
    font-weight: ${({ fontWeight }): string =>
        fontWeight ? `${fontWeight.toString()}` : "300"};
    font-family: ${({ fontFamily }): string => fontFamily || ""};
    font-style: ${({ fontStyle }): string => fontStyle || ""};

    text-transform: ${({ textTransform }): string => textTransform || "unset"};
    white-space: ${({ whiteSpace }): string => (whiteSpace ? whiteSpace : "")};
`;
