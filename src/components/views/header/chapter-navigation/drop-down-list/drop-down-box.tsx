import { FC, useState } from "react";
import { SelectComponent } from ".";
import { WrapperBox } from "../../../../wrapper-box";
import { BoxWithDecoration } from "../box-with-decor.styles";
import { SearchInputHeader } from "../search-input";
import { HotThems } from "../hot-thems";

type DropDownBoxprops = {
    setIsOpen: (prop: boolean) => void;
    isOpen: boolean;
};
export const DropDownBox: FC<DropDownBoxprops> = ({ isOpen, setIsOpen }) => {
    const [isOpenInfo, setIsOpenInfo] = useState(false);

    return (
        <WrapperBox alignItems="center" justifyContent="start">
            <SelectComponent
                isOpenInfo={isOpenInfo}
                setIsOpenInfo={setIsOpenInfo}
            />

            {!isOpen && !isOpenInfo && (
                <BoxWithDecoration
                    alignItems="baseline"
                    marginLeft={30}
                    width="100%"
                >
                    {!isOpen && <HotThems />}

                    {isOpen && <SearchInputHeader setIsOpen={setIsOpen} />}
                </BoxWithDecoration>
            )}
        </WrapperBox>
    );
};
