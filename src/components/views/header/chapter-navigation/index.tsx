import { FC, useState } from "react";
import { Colors } from "../../../../utils/colors";
import { Label } from "../../../label";
import { WrapperBox } from "../../../wrapper-box";
import { BoxWithDecoration } from "./box-with-decor.styles";
import { HotThems } from "./hot-thems";
import { SearchInputHeader } from "./search-input";
import { Select } from "./select";
import { ToActBox } from "./to-act-section";

export const ChapterNavigation: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const onhandleClick = () => {};
    return (
        <WrapperBox
            top="32px"
            height={60}
            width="100%"
            alignItems="center"
            padding="0px 15px 0px 97px"
            maxWidth={1160}
        >
            <WrapperBox
                width="100%"
                alignItems="center"
                justifyContent="space-between"
            >
                <WrapperBox alignItems="center" width="100%">
                    <Select />

                    <BoxWithDecoration
                        alignItems="baseline"
                        marginLeft={30}
                        width="100%"
                    >
                        {!isOpen && <HotThems />}

                        {isOpen && <SearchInputHeader setIsOpen={setIsOpen} />}
                    </BoxWithDecoration>
                </WrapperBox>
                <ToActBox isVisible={isOpen} setIsOpen={setIsOpen} />
            </WrapperBox>
        </WrapperBox>
    );
};
