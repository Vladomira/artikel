import styled from "styled-components";

export type MobileBoxStyledProps = {};

export const MobileBoxStyled = styled.div<MobileBoxStyledProps>`
    display: none;
    outline: 2px solid red;

    @media (max-width: 989px) {
        display: flex;
        flex-direction: column;
    }
`;
