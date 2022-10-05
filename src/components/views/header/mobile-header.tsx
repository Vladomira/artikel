import React, { useState } from "react";
import { Colors } from "../../../utils/colors";
import { MediaScreen } from "../../../utils/media";
import { Button } from "../../button/button";
import { Icon } from "../../icon";
import { SearchIcon } from "../../search-icon";
import { WrapperBox } from "../../wrapper-box";
import { ModalNavBox } from "./modal-nav";
import { ModalSearch } from "./modal-search";

export const MobileHeader = () => {
    const [isOpenNav, setisOpenNav] = useState(false);
    const [isOpenSearch, setIsOpenSearch] = useState(false);

    return (
        <WrapperBox
            mediaHidden={MediaScreen.DESKTOP}
            justifyContent="end"
            alignItems="center"
        >
            <WrapperBox alignItems="center" justifyContent="center">
                <SearchIcon
                    fill={Colors.WHITE}
                    size={24}
                    onClick={() => setIsOpenSearch(true)}
                />
                <Button
                    marginLeft={24}
                    onClick={() => setisOpenNav(true)}
                    width={"24px"}
                    height={24}
                    padding="0px"
                >
                    <Icon
                        imgName={"burger-menu"}
                        folder="header"
                        width={24}
                        height={24}
                        format="svg"
                    />
                </Button>
            </WrapperBox>

            {isOpenNav && <ModalNavBox setisOpen={setisOpenNav} />}
            {isOpenSearch && <ModalSearch setisOpen={setIsOpenSearch} />}
        </WrapperBox>
    );
};
