import styled from "styled-components";
import { WrapperBoxStyled } from "../../../wrapper-box/wrapper.styles";

type AuthorProps = {
    borderColor: string;
};
export const AuthorItemStyled = styled(WrapperBoxStyled)<AuthorProps>`
    @media (min-width: 990px) {
        width: 165px;
    }
    @media (max-width: 989px) {
        width: 200px;
    }
    min-height: 365px;
    z-index: 5;
    align-content: stretch;
    box-shadow: 0 2px 10px rgb(0 0 0 / 15%);
    border-bottom: ${({ borderColor }) => `8px solid${borderColor}`};
`;

export const AuthorLink = styled.div<AuthorProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 82px;
    height: 82px;
    margin: auto auto;
    border-color: ${({ borderColor }) => borderColor};
    border: ${({ borderColor }) => `5px solid ${borderColor}`};
    border-radius: 50%;
    overflow: hidden;
    z-index: 5;
`;

type BackgroundSignProps = {
    backImg: string;
};

export const BackgroundSign = styled(WrapperBoxStyled)<BackgroundSignProps>`
    position: relative;
    width: 100%;
    height: 110px;
    &::before {
        position: absolute;
        content: "";
        display: flex;
        align-content: stretch;
        justife-content: center;
        align-items: center;
        width: 100%;
        height: 110px;
        background-image: ${({ backImg }) => `url(${backImg})`};
        background-repeat: no-repeat;
        background-size: 100% auto;
        background-position: 50%;
    }
`;
