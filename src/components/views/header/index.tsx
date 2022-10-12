import React from "react";
import { WrapperBox } from "../../wrapper-box";
import { Navigation } from "./navigation-list";
import { SocialLinks } from "../../social-links";
import { MobileHeader } from "./mobile-header";
import { MediaScreen } from "../../../utils/media";
import { BoxWithImg } from "../../wrapper-box/box-with-img";
import { LogoBox } from "./logo-box";
import { ChapterNavigation } from "./chapter-navigation";
import { StyledHeader } from "./header.styles";
import { Container } from "../../container/container";
import { Colors } from "../../../utils/colors";

export const Header = () => {
    return (
        <StyledHeader>
            <WrapperBox
                width="100%"
                background={Colors.BLACK}
                direction="row"
                justifyContent="center"
                position="relative"
                height={32}
            >
                <BoxWithImg
                    position={"relative"}
                    backImg={"url(/images/header/back.png)"}
                    padding={"5px 0px"}
                    width="100%"
                    alignItems="center"
                    maxWidth={1160}
                    background={Colors.BLACK}
                    justifyContent="end"
                >
                    <LogoBox />
                    <WrapperBox
                        padding="0px 16px"
                        mediaHidden={MediaScreen.MOBILE}
                    >
                        <SocialLinks
                            imgSize={13}
                            marginRightNotLast={16}
                            listMarginRight={32}
                            itemPadding="0px 1px"
                            itemSize={13}
                        />
                        <Navigation />
                    </WrapperBox>

                    <MobileHeader />
                </BoxWithImg>
            </WrapperBox>

            <WrapperBox
                width="100%"
                alignItems="center"
                justifyContent="center"
            >
                <ChapterNavigation />
            </WrapperBox>
        </StyledHeader>
    );
};
