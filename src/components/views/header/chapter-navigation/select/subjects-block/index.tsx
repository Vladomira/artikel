import { FC, useState } from "react";
import { Colors } from "../../../../../../utils/colors";
import { WrapperBox } from "../../../../../wrapper-box";
import { SubjectsList } from "./subjects-list";

export const SubjectsBlock: FC = () => {
    const [selectedLabel, setSelectedLabel] = useState("Ontdek je passie");
    const [isCkicked, setisClicked] = useState(false);

    return (
        <WrapperBox
            onClick={() => setisClicked(!isCkicked)}
            position="absolute"
            background={Colors.WHITE}
            top="0px"
            zIndex={1000}
        >
            <SubjectsList />
        </WrapperBox>
    );
};
