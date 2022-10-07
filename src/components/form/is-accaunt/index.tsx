import React, { FC } from "react";
import { Colors } from "../../../utils/colors";
import { Button } from "../../button/button";
import { Label } from "../../label";
import { WrapperBox } from "../../wrapper-box";

type IsAccauntBoxProps = {
    text: string;
    link: string;
    linkText: string;
    marginTop: number;
    setIsOpen?: (prop: boolean) => void;
};

export const IsAccauntBox: FC<IsAccauntBoxProps> = ({
    text,
    link,
    linkText,
    marginTop,
    setIsOpen,
}) => {
    return (
        <WrapperBox marginTop={marginTop} justifyContent="center">
            <Label
                color={Colors.WHITE}
                fontSize={12}
                fontWeight={300}
                lineHeight={"1.4"}
                text={text}
            />
            &nbsp;
            <Button onClick={() => setIsOpen(true)}>
                <Label
                    color={Colors.WHITE}
                    fontSize={12}
                    fontWeight={300}
                    lineHeight={"1.4"}
                    text={linkText}
                    textDecoration="underline"
                />
            </Button>
        </WrapperBox>
    );
};
