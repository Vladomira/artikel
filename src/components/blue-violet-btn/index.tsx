import { FC } from "react";
import { Colors } from "../../utils/colors";
import { Label } from "../label";
import { BlueVioletBtn, BlueVioletBtnProps } from "./blue-violet-btn-styles";

type BlueVioletProps = BlueVioletBtnProps & {
    text: string;
    padding: string;
    onClick: () => void;
    marginLeft?: number;
};
export const BlueViolet: FC<BlueVioletProps> = ({
    text,
    padding,
    maxHeight,
    marginLeft,
    onClick,
}) => {
    return (
        <BlueVioletBtn
            padding={padding}
            borderRadius={"2px"}
            maxHeight={maxHeight}
            onClick={onClick}
            marginLeft={marginLeft}
        >
            <Label
                color={Colors.WHITE}
                fontSize={12}
                fontWeight={700}
                lineHeight={"18px"}
                letterSpacing={".15em"}
                text={text}
                textTransform="uppercase"
                fontFamily="Merriweather Sans,sans-serif"
                width={"max-content"}
            />
        </BlueVioletBtn>
    );
};
