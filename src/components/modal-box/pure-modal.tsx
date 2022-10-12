import { PropsWithChildren } from "react";
import { Colors } from "../../utils/colors";
import { SetIsOpenProps } from "../../utils/prop-types/setIsOpen";
import { CloseButton } from "../close-button";
import { WrapperBox } from "../wrapper-box";
import { PureModalStyled, StyledModalProps } from "./pure-modal.styles";

type PureModalrops = StyledModalProps & SetIsOpenProps;
export const PureModal = ({
    setIsOpen,
    children,
    padding,
    paddingTop,
    paddingLeft,
    paddingRight,
    mediaHidden,
}: PropsWithChildren<PureModalrops>) => {
    return (
        <PureModalStyled
            mediaHidden={mediaHidden}
            padding={padding}
            paddingTop={paddingTop}
            paddingLeft={paddingLeft}
            paddingRight={paddingRight}
        >
            <WrapperBox direction="column">
                <WrapperBox justifyContent="end">
                    <CloseButton
                        setIsOpen={setIsOpen}
                        // top={"0px"}
                        // right={"0px"}
                        color={Colors.BLACK}
                    />
                </WrapperBox>

                {children}
            </WrapperBox>
        </PureModalStyled>
    );
};
