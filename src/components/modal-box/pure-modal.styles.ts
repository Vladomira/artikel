import styled from "styled-components";
import { Colors } from "../../utils/colors";

export type StyledModalProps = {
    padding?: string;
    paddingTop?: string;
    paddingLeft?: string;
    paddingRight?: string;
    mediaHidden?: string;
    direction?: string;
};

export const PureModalStyled = styled.div<StyledModalProps>`
    position: fixed;
    display: flex;
    flex-direction: ${({ direction }): string => direction || ""};

    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    padding-top: ${({ paddingTop }): string => paddingTop || ""};
    padding-left: ${({ paddingLeft }): string => paddingLeft || ""};
    padding-right: ${({ paddingRight }): string => paddingRight || ""};
    padding: ${({ padding }): string => padding || ""};
    background-color: ${Colors.WHITE};

    z-index: 3200;

    ${({ mediaHidden }) =>
        mediaHidden &&
        ` @media (${mediaHidden}) {
            display: none;
        }`}
`;
