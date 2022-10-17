import styled from "styled-components";

export type CloseIconWrapperProps = {
    colorWrapper?: string;
    hoverColor?: string;
};

export const CloseIconWrapper = styled.span<CloseIconWrapperProps>`
    color: ${({ colorWrapper }) => colorWrapper || ""};
    transition: all 200ms cubic-bezier(0.17, 0.67, 0.83, 0.67);

    &:hover,
    &:focus {
        color: ${({ hoverColor }) => hoverColor || ""};
    }
`;
