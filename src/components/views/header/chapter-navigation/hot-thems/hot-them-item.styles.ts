import styled from "styled-components";
import { Colors } from "../../../../../utils/colors";
import { ListItem } from "../../../../list";

export const HotThemItem = styled(ListItem)`
    cursor: pointer;
    position: relative;

    &:not(:first-child) {
        &:before {
            position: absolute;
            content: "";
            display: block;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            margin-right: 8px;
            left: -10px;
            top: 9px;

            background: ${Colors.ORANGE};
        }
    }
`;
