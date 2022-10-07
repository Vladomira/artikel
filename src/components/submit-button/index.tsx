import { FC } from "react";
import { Colors } from "../../utils/colors";
import { Button } from "../button/button";
import { Label } from "../label";

type SubmitButtonProps = {
    backColor?: string;
    text: string;
    marginTop?: number;
};
export const SubmitButton: FC<SubmitButtonProps> = ({
    backColor,
    text,
    marginTop,
}) => {
    return (
        <Button
            borderRadius="2px"
            padding="10px 20px"
            background={backColor || Colors.WHITE}
            marginTop={marginTop || 28}
            width="100%"
            type="submit"
        >
            <Label
                color={Colors.BLACK}
                fontSize={12}
                fontWeight={700}
                lineHeight={"18px"}
                letterSpacing={".15em"}
                text={text}
                textTransform="uppercase"
                fontFamily="Merriweather Sans,sans-serif"
            />
        </Button>
    );
};
