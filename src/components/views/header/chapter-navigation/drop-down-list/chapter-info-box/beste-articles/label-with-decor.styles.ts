import styled from "styled-components";
import { Colors } from "../../../../../../../utils/colors";
import { StyledLabel } from "../../../../../../label/label.styles";

export const LinkWithDecor = styled.a`
    display: flex;
    margin-left: 8px;
    cursor: pointer;
    align-items: center;

    &:before {
        content: "";
        display: block;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        margin-right: 8px;

        background: ${Colors.TEXT_GREY};
    }
`;

export const LabelDecorated = styled(StyledLabel)`
    display: flex;
    align-items: center;

    &:before {
        content: "";
        display: block;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        margin-right: 12px;
        margin-top: 7px;

        background: ${Colors.TEXT_GREY};
    }
`;
