import { FC } from "react";
import { Icon } from "../../icon";
import { WrapperBox } from "../../wrapper-box";

export const LogoBox: FC = () => {
    return (
        <WrapperBox position="absolute" top="0" left="0">
            <Icon
                imgName={"logo"}
                format="svg"
                folder="header"
                width={92}
                height={92}
            />
        </WrapperBox>
    );
};
