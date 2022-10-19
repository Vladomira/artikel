import { PropsWithChildren } from "react";
import { Colors } from "../../utils/colors";
import { WrapperBox } from "../wrapper-box";
import { HeaderStyled } from "./header.styles";

export type InfoHeaderProps = {
    header: string;
    noMarginBottom?: boolean;
};
export const ChapterInfoHeader = ({
    header,
    children,
    noMarginBottom,
}: PropsWithChildren<InfoHeaderProps>) => {
    return (
        <WrapperBox
            width="100%"
            borderBottom={`4px solid ${Colors.BLACK}`}
            marginBottom={noMarginBottom ? 0 : 16}
        >
            <HeaderStyled
                color={Colors.BLACK}
                fontSize={20}
                fontWeight={700}
                textTransform="uppercase"
                textAlign={"start"}
                whiteSpace={"nowrap"}
            >
                {header}
                {children}
            </HeaderStyled>
        </WrapperBox>
    );
};
