import { FC, useState } from "react";
import { WrapperBox } from "../../../wrapper-box";
import { ToActBox } from "./to-act-section";
import { DropDownBox } from "./drop-down-list/drop-down-box";

export const ChapterNavigation: FC = () => {
    const [isOpenSearch, setIsOpenSearch] = useState(false);

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
                <DropDownBox
                    setIsOpenSearch={setIsOpenSearch}
                    isOpenSearch={isOpenSearch}
                />

                <ToActBox
                    isVisible={isOpenSearch}
                    setIsOpen={setIsOpenSearch}
                />
            </WrapperBox>
        </WrapperBox>
    );
};
