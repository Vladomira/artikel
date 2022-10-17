import styled from "styled-components";
import { Colors } from "../../../utils/colors";

type StyledHeaderProps = {
    boxShadow: string;
};
export const StyledHeader = styled.header<StyledHeaderProps>`
    position: fixed;
    top: 0;
    width: 100%;

    background: ${Colors.WHITE};
    @media (min-width: 991px) {
        box-shadow: ${({ boxShadow }) => boxShadow || ""};
    }
`;
