import { FC } from "react";
import { Colors } from "../../../../../utils/colors";
import { MediaScreen } from "../../../../../utils/media";
import { BlueViolet } from "../../../../blue-violet-btn";

import { SearchIcon } from "../../../../search-icon";
import { WrapperBox } from "../../../../wrapper-box";

export type ToActBoxProps = {
    setIsOpen: (prop: boolean) => void;
    isVisible?: boolean;
};

export const ToActBox: FC<ToActBoxProps> = ({ setIsOpen, isVisible }) => {
    const onhandleClick = () => {};
    return (
        <WrapperBox mediaHidden={MediaScreen.MOBILE}>
            {!isVisible && (
                <SearchIcon
                    fill={Colors.BLACK}
                    size={22}
                    onClick={() => setIsOpen(true)}
                    btnWidth={"22"}
                />
            )}

            <BlueViolet
                text="Word een schrijver"
                padding="10px 23px"
                maxHeight="36px"
                onClick={onhandleClick}
                marginLeft={25}
            />
        </WrapperBox>
    );
};
