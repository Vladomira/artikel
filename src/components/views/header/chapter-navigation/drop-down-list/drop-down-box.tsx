import { FC, useState } from "react";
import { SelectComponent } from ".";
import { WrapperBox } from "../../../../wrapper-box";
import { BoxWithDecoration } from "../box-with-decor.styles";
import { SearchInputHeader } from "../search-input";
import { HotThems } from "../hot-thems";

type DropDownBoxprops = {
    setIsOpenSearch: (prop: boolean) => void;
    isOpenSearch: boolean;
};
export const DropDownBox: FC<DropDownBoxprops> = ({
    isOpenSearch,
    setIsOpenSearch,
}) => {
    return (
        <WrapperBox alignItems="center" width="100%" justifyContent="start">
            <SelectComponent />

            <BoxWithDecoration
                alignItems="baseline"
                marginLeft={30}
                width={isOpenSearch ? "100%" : ""}
                justifyContent="start"
            >
                {!isOpenSearch && <HotThems />}
                {isOpenSearch && (
                    <SearchInputHeader setIsOpen={setIsOpenSearch} />
                )}
            </BoxWithDecoration>
        </WrapperBox>
    );
};
