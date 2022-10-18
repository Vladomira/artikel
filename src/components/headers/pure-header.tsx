import { FC } from "react";
import { Colors } from "../../utils/colors";
import { InfoHeaderProps } from "./chapter-info-header";
import { HeaderStyled } from "./header.styles";

export const PureHeader: FC<InfoHeaderProps> = ({ header }) => {
    return (
        <HeaderStyled
            color={Colors.BLACK}
            fontSize={20}
            fontWeight={700}
            textTransform="uppercase"
            textAlign={"start"}
            whiteSpace={"nowrap"}
        >
            {header}
        </HeaderStyled>
    );
};
