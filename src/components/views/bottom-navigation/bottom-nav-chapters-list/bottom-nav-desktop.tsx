import { FC } from "react";
import { BottomChaptersProps } from "../../../../api/chapters-bottom-request";
import { MediaScreen } from "../../../../utils/media";
import { Label } from "../../../label";
import { WrapperBox } from "../../../wrapper-box";
import { BottomListStyled, BottomNavItem } from "./bottom-nav-list.styles";
import { BottomNavTopics } from "./bottom-topics/bottom-nav-topics-list";

export type BottomNavProps = BottomChaptersProps & {
    onHandleClick: (el: string) => void;
    initialChapter: string;
    topics: string[];
};
export const BottomNavDesktop: FC<BottomNavProps> = ({
    chapters,
    onHandleClick,
    initialChapter,
    topics,
}) => {
    return (
        <WrapperBox marginTop={20} mediaHidden={MediaScreen.MOBILE}>
            <BottomListStyled
                display="flex"
                direction="column"
                overflow="unset"
            >
                {chapters &&
                    chapters?.map(({ chapter }) => (
                        <BottomNavItem
                            key={chapter}
                            onClick={() => onHandleClick(chapter)}
                            padding="6px 0px"
                            isActive={chapter === initialChapter}
                        >
                            <Label
                                color="currentColor"
                                fontSize={14}
                                fontWeight={700}
                                text={chapter}
                                lineHeight={"1.4"}
                            />
                        </BottomNavItem>
                    ))}
            </BottomListStyled>
            <BottomNavTopics topics={topics} />
        </WrapperBox>
    );
};
