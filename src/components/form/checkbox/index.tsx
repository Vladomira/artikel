import React, { PropsWithChildren, useState } from "react";
import { Colors } from "../../../utils/colors";
import { Label } from "../../label";
import { WrapperBox } from "../../wrapper-box";
import { CheckboxStyled } from "./checkbox.styles";

type CheckboxComponentProps = {
    text?: string;
    marginTop: number;
};
export const CheckboxComponent = ({
    text,
    children,
    marginTop,
}: PropsWithChildren<CheckboxComponentProps>) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <WrapperBox
            justifyContent={text ? "space-between" : ""}
            marginTop={marginTop}
        >
            <WrapperBox alignItems="center">
                <CheckboxStyled
                    checked={isChecked}
                    onClick={() => setIsChecked(!isChecked)}
                />
                {text && (
                    <Label
                        color={Colors.WHITE}
                        fontSize={12}
                        fontWeight={300}
                        lineHeight={"1.4"}
                        letterSpacing={""}
                        text={text}
                        marginLeft={7}
                    />
                )}
            </WrapperBox>
            {children}
        </WrapperBox>
    );
};
