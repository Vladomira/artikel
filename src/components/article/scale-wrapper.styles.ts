import styled from "styled-components";
import { WrapperBoxStyled } from "../wrapper-box/wrapper.styles";

export const ScaleWrapper = styled(WrapperBoxStyled)`
    width: 100%;
    max-height: 184px;
    transition: transform ease 0.6s;
    width: 100%;
    transform: scale(1);

    &:hover,
    &:focus {
        transform: scale(1.04);
    }
`;

export const ScaleLink = styled.a`
    margin-bottom: 15px;

    overflow: hidden;
`;
