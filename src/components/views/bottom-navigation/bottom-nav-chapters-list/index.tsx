import { useRouter } from "next/router";
import { FC, useState } from "react";
import {
    BottomChaptersProps,
    BottomChapter,
} from "../../../../api/chapters-bottom-request";
import { Colors } from "../../../../utils/colors";
import { PureHeader } from "../../../headers/pure-header";
import { WrapperBox } from "../../../wrapper-box";
import { BottomNavDesktop } from "./bottom-nav-desktop";
import { MobileBottomNavSection } from "./bottom-nav-mobile";
import { HeaderWrapper } from "./bottom-nav-mobile/bottom-nav-mobile.styles";

export const BottomNavSection: FC<BottomChaptersProps> = ({ chapters }) => {
    const [initialInfo, setInitialInfo] = useState<BottomChapter>({
        chapter: chapters[0]?.chapter,
        topics: chapters[0]?.topics,
    });
    const [isActive, constSetIsActive] = useState();
    const router = useRouter();

    const onHandleClick = (chapter: string) => {
        initialInfo.chapter === chapter &&
            router.push(`/${chapter.toLowerCase()}`);
        chapters.find((el) => el.chapter === chapter && setInitialInfo(el));
    };
    return (
        <>
            <WrapperBox direction="column">
                <HeaderWrapper>
                    <PureHeader
                        header={"Vind artikelen"}
                        color={Colors.WHITE}
                    />
                </HeaderWrapper>

                <BottomNavDesktop
                    chapters={chapters}
                    onHandleClick={onHandleClick}
                    initialChapter={initialInfo.chapter}
                    topics={initialInfo.topics}
                />
            </WrapperBox>
            <MobileBottomNavSection
                chapters={chapters}
                onHandleClick={onHandleClick}
                initialChapter={initialInfo.chapter}
                topics={initialInfo.topics}
            />
        </>
    );
};
