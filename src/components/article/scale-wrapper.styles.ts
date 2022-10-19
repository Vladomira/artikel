import styled from "styled-components";
import { WrapperBoxStyled } from "../wrapper-box/wrapper.styles";

type ScaleWrapperprops = {
    scaleHeight?: string;
};
export const ScaleWrapper = styled(WrapperBoxStyled)<ScaleWrapperprops>`
    width: 100%;
    height: ${({ scaleHeight }) => scaleHeight || ""};
    transition: transform ease 0.6s;
    transform: scale(1);

    &:hover,
    &:focus {
        transform: scale(1.04);
    }
`;

type StyledLinkProps = {
    marginBottom?: string;
    position?: string;
};

export const ScaleLink = styled.a<StyledLinkProps>`
    position: ${({ position }): string => position || ""};
    margin-bottom: ${({ marginBottom }): string => marginBottom || "15px"};

    overflow: hidden;
`;
