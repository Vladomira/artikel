import { FC } from "react";
import { Colors } from "../../utils/colors";
import { Label } from "../label";
import { WrapperBox } from "../wrapper-box";

type InfoHeaderProps = {
    header: string;
};
export const ChapterInfoHeader: FC<InfoHeaderProps> = ({ header }) => {
    return (
        <WrapperBox
            width="100%"
            borderBottom={`4px solid ${Colors.BLACK}`}
            marginBottom={16}
        >
            <Label
                color={Colors.BLACK}
                fontSize={20}
                fontWeight={700}
                lineHeight={""}
                text={header}
                textTransform="uppercase"
                textAlign="start"
                whiteSpace="nowrap"
            />
        </WrapperBox>
    );
};
