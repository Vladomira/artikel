import { PropsWithChildren } from "react";
import { Colors } from "../../utils/colors";
import { SetIsOpenProps } from "../../utils/prop-types/setIsOpen";
import { Button } from "../button/button";
import { CloseButton } from "../close-button";
import { Icon } from "../icon";
import { WrapperBox } from "../wrapper-box";
import { PureModalStyled, StyledModalProps } from "./pure-modal.styles";

type PureModalrops = StyledModalProps &
    SetIsOpenProps & { backArrow?: boolean; onBackClick?: () => void };

export const PureModal = ({
    setIsOpen,
    children,
    padding,
    paddingTop,
    paddingLeft,
    paddingRight,
    mediaHidden,
    backArrow,
    onBackClick,
}: PropsWithChildren<PureModalrops>) => {
    return (
        <PureModalStyled
            mediaHidden={mediaHidden}
            padding={padding}
            paddingTop={paddingTop}
            paddingLeft={paddingLeft}
            paddingRight={paddingRight}
            direction="column"
        >
            <WrapperBox justifyContent={backArrow ? "space-between" : "end"}>
                {backArrow && (
                    <Button onClick={onBackClick}>
                        <Icon
                            imgName={"arrow-back"}
                            folder="tech-icons"
                            width={28}
                            height={28}
                            format="svg"
                        />
                    </Button>
                )}
                <CloseButton
                    setIsOpen={() => setIsOpen(false)}
                    color={Colors.BLACK}
                />
            </WrapperBox>

            {children}
        </PureModalStyled>
    );
};
