import React, { useContext, useEffect, useState } from "react";
import { WrapperBox } from "../../wrapper-box";
import { Navigation } from "./navigation-list";
import { SocialLinks } from "../../social-links";
import { MobileHeader } from "./mobile-header";
import { MediaScreen } from "../../../utils/media";
import { BoxWithImg } from "../../wrapper-box/box-with-img";
import { LogoBox } from "./logo-box";
import { ChapterNavigation } from "./chapter-navigation";
import { StyledHeader } from "./header.styles";
import { Colors } from "../../../utils/colors";
import { HotThems } from "./chapter-navigation/hot-thems";
import { Label } from "../../label";
import { AuthContext } from "../../../context/auth-context";

export const Header = () => {
    const [isScroll, setIsScroll] = useState(false);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const handleScroll = (event) => {
            setIsScroll(true);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <StyledHeader
            boxShadow={isScroll && "1px 1px 8px 1px rgb(0 0 0 / 10%)"}
        >
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
                    {user.email && (
                        <WrapperBox
                            position="absolute"
                            left="100px"
                            top="5px"
                            marginBottom={10}
                            padding="0px 3px"
                            background="radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);"
                        >
                            <Label
                                color={Colors.BLACK}
                                fontSize={18}
                                fontWeight={700}
                                lineHeight={""}
                                text={`Hello, ${user.email}`}
                            />
                        </WrapperBox>
                    )}
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
            <HotThems mediaHidden={MediaScreen.DESKTOP} />
        </StyledHeader>
    );
};
