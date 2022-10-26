import styled from "styled-components";
import { Colors } from "../../../../../utils/colors";
import { ListItem } from "../../../../list";

export const ItemTopic = styled(ListItem)`
    padding: 0px;
    width: 100%;
    max-width: 130px;
    max-height: 41px;
    flex-basis: calc(100% / 3 - 16px);
`;
