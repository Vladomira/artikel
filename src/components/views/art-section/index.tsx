import { FC } from "react";
import { Colors } from "../../../utils/colors";
import { Icon } from "../../icon";
import { WrapperBox } from "../../wrapper-box";
import { ArtIconWrapper, ArtWrapper, ArtSection } from "./icon-wrapper.styles";

export const ActualArticlesList: FC = () => {
    return (
        <ArtSection
            paddingTop={32}
            paddingBottom={0}
            background={Colors.WHITE}
            container
            position="relative"
        >
            <WrapperBox
                background={Colors.ART_SECTION_BACK}
                padding="36px 20px"
                justifyContent="center"
            >
                <ArtWrapper justifyContent="center">
                    <ArtIconWrapper>
                        <Icon
                            imgName={"art-banner"}
                            width={972}
                            height={251}
                            folder={"art-section"}
                            format={"webp"}
                        />
                    </ArtIconWrapper>
                </ArtWrapper>
            </WrapperBox>
        </ArtSection>
    );
};
