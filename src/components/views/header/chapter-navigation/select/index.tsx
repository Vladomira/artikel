import { FC, useState } from "react";
import { Colors } from "../../../../../utils/colors";
import { Icon } from "../../../../icon";
import { Label } from "../../../../label";
import { WrapperBox } from "../../../../wrapper-box";
import { SubjectsBlock } from "./subjects-block";

enum SlectArrow {
    DOWN = "select-down",
    UP = "select-up",
}
export const Select: FC = () => {
    const [selectedLabel, setSelectedLabel] = useState("Ontdek je passie");
    const [isCkicked, setisClicked] = useState(false);

    return (
        <WrapperBox
            onClick={() => setisClicked(!isCkicked)}
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
            />

            <Icon
                imgName={isCkicked ? SlectArrow.UP : SlectArrow.DOWN}
                format="svg"
                folder="tech-icons"
                width={20}
                height={20}
            />
            {isCkicked && <SubjectsBlock />}
        </WrapperBox>
    );
};
