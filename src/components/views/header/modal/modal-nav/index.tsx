import React, { FC } from "react";
import { Modal } from "../../../../modal-box";
import { SocialLinks } from "../../../../social-links";
import { MediaScreen } from "../../../../../utils/media";
import { Label } from "../../../../label";
import { Colors } from "../../../../../utils/colors";
import { ModalNavigation } from "./modal-navigation";

import { WrapperBox } from "../../../../wrapper-box";
import { BlueViolet } from "../../../../blue-violet-btn";

export type ModalBoxProps = {
    setIsOpen: (prop: boolean) => void;
};
export const ModalNavBox: FC<ModalBoxProps> = ({ setIsOpen }) => {
    return (
        <Modal
            mediaHidden={MediaScreen.DESKTOP}
            setisOpen={setIsOpen}
            padding="50px 10%"
            title="Navigatie"
            closeButton
        >
            <WrapperBox mediaHidden={""} marginTop={32} marginBottom={30}>
                <Label
                    color={Colors.LABEL_GREY}
                    fontSize={12}
                    fontWeight={300}
                    lineHeight={"1.4"}
                    letterSpacing={".15em"}
                    text={"Welkom,"}
                    fontStyle="italic"
                    fontFamily="Merriweather Sans,sans-serif"
                />

                <Label
                    color={Colors.WHITE}
                    fontSize={12}
                    fontWeight={300}
                    lineHeight={"1.4"}
                    letterSpacing={".15em"}
                    text={" bezoeker"}
                    fontStyle="italic"
                    fontFamily="Merriweather Sans,sans-serif"
                />
            </WrapperBox>
            <BlueViolet text="Word een schrijver" padding="10px 20px" />

            <ModalNavigation setIsOpen={setIsOpen} />

            <SocialLinks
                imgSize={24}
                itemSize={26}
                marginRightNotLast={30}
                jContentList="center"
                listMarginRight={0}
                itemPadding="4px"
            />
        </Modal>
    );
};
