import { FC, PropsWithChildren } from "react";
import { Colors } from "../../utils/colors";
import { InfoHeaderProps } from "./chapter-info-header";
import { HeaderStyled } from "./header.styles";

type PureHeaderProps = InfoHeaderProps & {
    display?: string;
    alignItems?: string;
    marginRight?: number;
    color?: string;
    hoverColor?: string;
};
export const PureHeader = ({
    header,
    children,
    marginRight,
    color,
    hoverColor,
}: PropsWithChildren<PureHeaderProps>) => {
    return (
        <HeaderStyled
            color={color || Colors.BLACK}
            fontSize={20}
            fontWeight={700}
            textTransform="uppercase"
            textAlign={"start"}
            whiteSpace={"nowrap"}
            hoverColor={hoverColor}
            // Colors.ORANGE
            marginRight={marginRight}
        >
            {header}
            {children}
        </HeaderStyled>
    );
};
