import { FC } from "react";
import { Colors } from "../../../../utils/colors";
import { Button } from "../../../button/button";
import { BottomHeader } from "../../../headers/bottom-header";
import { Label } from "../../../label";
import { WrapperBox } from "../../../wrapper-box";
import { BecomeWriterIMG } from "./become-writer.styled";

export const BecomeWriter: FC = () => {
    return (
        <BecomeWriterIMG
            background={Colors.WHITE}
            padding="20px 0px 20px"
            direction="column"
        >
            <WrapperBox padding="0px 0px 0px 82px" zIndex={1}>
                <BottomHeader
                    color={Colors.BLACK}
                    fontSize={25}
                    fontWeight={700}
                    lineHeight={"1.35"}
                    text={"Schrijven is jouw passie?"}
                    textTransform="uppercase"
                />
            </WrapperBox>
            <WrapperBox
                position="absolute"
                bottom="20px"
                right="13%"
                zIndex={9}
            >
                <Button
                    background={Colors.BLACK}
                    hoverBackground={Colors.GREY}
                    padding="10px 20px"
                    borderRadius={"2px"}
                >
                    <Label
                        color={Colors.WHITE}
                        fontSize={12}
                        fontWeight={700}
                        lineHeight={"18px"}
                        letterSpacing={".15"}
                        text={"Word een schrijver"}
                        textTransform="uppercase"
                        whiteSpace="nowrap"
                    />
                </Button>
            </WrapperBox>
        </BecomeWriterIMG>
    );
};
