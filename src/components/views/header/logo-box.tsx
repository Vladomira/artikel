import { FC } from "react";
import { Icon } from "../../icon";
import { WrapperBox } from "../../wrapper-box";

export const LogoBox: FC = () => {
    return (
        <WrapperBox position="absolute" top="0">
            <Icon
                imgName={"logo"}
                format="svg"
                folder="header"
                width={84}
                height={84}
            />
        </WrapperBox>
    );
};
