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

type SelectComponentProps = {
    isOpenInfo: boolean;
    setIsOpenInfo: (prop: boolean) => void;
};
export const SelectComponent: FC<SelectComponentProps> = ({
    isOpenInfo,
    setIsOpenInfo,
}) => {
    const [selectedLabel, setSelectedLabel] = useState("Ontdek je passie");
    const [isCkicked, setisClicked] = useState(false);

    return (
        <WrapperBox
            onClick={() => (setisClicked(!isCkicked), setIsOpenInfo(false))}
            position="relative"
            padding="0px 0px 0px 10px"
            width={"100%"}
        >
            <WrapperBox
                zIndex={3001}
                justifyContent="start"
                position="relative"
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
                <Icon
                    imgName={isCkicked ? SlectArrow.UP : SlectArrow.DOWN}
                    format="svg"
                    folder="tech-icons"
                    width={20}
                    height={20}
                />
            </WrapperBox>
            {isCkicked && (
                <DropDownChapters
                    isOpen={isOpenInfo}
                    setIsOpen={setIsOpenInfo}
                />
            )}
        </WrapperBox>
    );
};
