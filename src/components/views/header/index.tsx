import React from "react";
import { Container } from "../../container/container.styled";

import { WrapperBox } from "../../wrapper-box";
import { Navigation } from "./navigation-list";
import { SocialLinks } from "../../social-links";
import { MobileHeader } from "./mobile-header";
import { MediaScreen } from "../../../utils/media";
import { BoxWithImg } from "../../wrapper-box/box-with-img";
import { LogoBox } from "./logo-box";
import { ChapterNavigation } from "./chapter-navigation";

export const Header = () => {
    return (
        <header>
            <WrapperBox
                top={"0px"}
                width="100%"
                position="fixed"
                direction="column"
            >
                <BoxWithImg
                    position={"relative"}
                    top={"0px"}
                    height={32}
                    backImg={"url(/images/header/back.png)"}
                    padding={"5px 0px"}
                >
                    <LogoBox />

                    <Container>
                        <WrapperBox
                            justifyContent="end"
                            alignItems="center"
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
                    </Container>
                </BoxWithImg>

                <ChapterNavigation />
            </WrapperBox>
        </header>
    );
};
