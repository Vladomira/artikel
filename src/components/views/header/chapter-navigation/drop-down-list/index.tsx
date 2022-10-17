import { FC, useState } from "react";
import { Colors } from "../../../../../utils/colors";
import { Icon } from "../../../../icon";
import { Label } from "../../../../label";
import { WrapperBox } from "../../../../wrapper-box";
import { DropDownChapters } from "./drop-down-chapters";

enum SlectArrow {
    DOWN = "select-down",
    UP = "select-up",
}

export const SelectComponent: FC = () => {
    const [selectedLabel, setSelectedLabel] = useState("Ontdek je passie");
    const [isCkicked, setIsClicked] = useState(false);

    return (
        <WrapperBox position="relative" padding="0px 0px 0px 10px">
            <WrapperBox
                zIndex={3001}
                justifyContent="start"
                position="relative"
                onClick={() => setIsClicked(!isCkicked)}
            >
                <Label
                    color={isCkicked ? Colors.GREY_VARIANT : Colors.BLACK}
                    fontSize={14}
                    fontWeight={700}
                    lineHeight={"1.4"}
                    letterSpacing={""}
                    text={selectedLabel}
                    hoverColor={Colors.ORANGE}
                    marginRight={4}
                    cursor="pointer"
                    whiteSpace="nowrap"
                />
                <WrapperBox position="absolute" top="1px" right="-20px">
                    <Icon
                        imgName={isCkicked ? SlectArrow.UP : SlectArrow.DOWN}
                        format="svg"
                        folder="tech-icons"
                        width={20}
                        height={20}
                    />
                </WrapperBox>
            </WrapperBox>
            {isCkicked && <DropDownChapters setIsClicked={setIsClicked} />}
        </WrapperBox>
    );
};
