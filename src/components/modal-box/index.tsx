import React, { PropsWithChildren } from "react";
import { Colors } from "../../utils/colors";
import { Button } from "../button/button";
import { Icon } from "../icon";
import { WrapperBox } from "../wrapper-box";
import { Title } from "../title";
import { StyledModal, StyledModalProps } from "./modal.styles";

type ModalProps = StyledModalProps & {
    setisOpen: (prop: boolean) => void;
    title?: string;
    closeButton?: boolean;
};
export const Modal = ({
    padding,
    paddingRight,
    paddingLeft,
    paddingTop,
    children,
    mediaHidden,
    setisOpen,
    title,
    opacity,
    secondImg,
    imgWidth,
    imgHeight,
    closeButton,
    secondImgWidth,
    secondImgHeight,
}: PropsWithChildren<ModalProps>) => {
    return (
        <StyledModal
            padding={padding}
            paddingTop={paddingTop}
            paddingRight={paddingRight}
            paddingLeft={paddingLeft}
            mediaHidden={mediaHidden}
            opacity={opacity}
            secondImg={secondImg}
            imgWidth={imgWidth}
            imgHeight={imgHeight}
            secondImgWidth={secondImgWidth}
            secondImgHeight={secondImgHeight}
            backImg="url(/images/header/m_back.png)"
        >
            <WrapperBox direction="column" width="100%">
                {closeButton && (
                    <Button
                        margin={"0px 0px 0px auto"}
                        padding="0px"
                        onClick={() => setisOpen(false)}
                    >
                        <Icon
                            imgName={"close"}
                            format="svg"
                            folder="header"
                            width={24}
                            height={24}
                            color="white"
                        />
                    </Button>
                )}

                {title && (
                    <Title
                        color={Colors.WHITE}
                        fontSize={22}
                        fontWeight={700}
                        lineHeight={"1.1"}
                        letterSpacing={".13em"}
                        text={title}
                        textTransform="uppercase"
                        fontFamily="Playfair Display,serif"
                    />
                )}
                {children}
            </WrapperBox>
        </StyledModal>
    );
};
