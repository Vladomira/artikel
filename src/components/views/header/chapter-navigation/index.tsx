import { FC, useState } from "react";
import { WrapperBox } from "../../../wrapper-box";
import { ToActBox } from "./to-act-section";
import { DropDownBox } from "./drop-down-list/drop-down-box";

export const ChapterNavigation: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <WrapperBox
            height={60}
            width="100%"
            padding="0px 0px 0px 97px"
            maxWidth={1160}
        >
            <WrapperBox
                width="100%"
                alignItems="center"
                justifyContent="space-between"
            >
                <DropDownBox setIsOpen={setIsOpen} isOpen={isOpen} />

                <ToActBox isVisible={isOpen} setIsOpen={setIsOpen} />
            </WrapperBox>
        </WrapperBox>
    );
};
