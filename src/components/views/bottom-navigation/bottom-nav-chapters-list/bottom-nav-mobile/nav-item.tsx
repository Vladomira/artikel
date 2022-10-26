import { FC } from "react";
import { Label } from "../../../../label";
import { BottomNavProps } from "../bottom-nav-desktop";
import { NavItemWrapper } from "./bottom-nav-mobile.styles";
import { MobileBottomTopics } from "./bottom-topics-mobile";

type BottomNavItemProps = BottomNavProps & {
    idx: number;
    goToSlide: (prop: number) => void;
    chapter: string;
};
export const MobileNavItem: FC<BottomNavItemProps> = ({
    chapter,
    idx,
    goToSlide,
    onHandleClick,
    initialChapter,
    topics,
}) => {
    return (
        <>
            {" "}
            <NavItemWrapper
                onClick={() => (onHandleClick(chapter), goToSlide(idx))}
                isActive={chapter === initialChapter}
            >
                <Label
                    color={"currentColor"}
                    fontSize={14}
                    fontWeight={700}
                    lineHeight={"1.4"}
                    text={chapter}
                />
            </NavItemWrapper>
            {chapter === initialChapter && (
                <MobileBottomTopics topics={topics} />
            )}
        </>
    );
};
