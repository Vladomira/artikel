import { FC } from "react";
import { Colors } from "../../utils/colors";
import { WrapperBox } from "../wrapper-box";
import { HeaderStyled } from "./header.styles";

export type InfoHeaderProps = {
    header: string;
};
export const ChapterInfoHeader: FC<InfoHeaderProps> = ({ header }) => {
    return (
        <WrapperBox
            width="100%"
            borderBottom={`4px solid ${Colors.BLACK}`}
            marginBottom={16}
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
            </HeaderStyled>
        </WrapperBox>
    );
};
