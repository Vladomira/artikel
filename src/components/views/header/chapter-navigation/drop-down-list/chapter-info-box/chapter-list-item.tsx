import { FC } from "react";
import { ChapterInfo } from "../../../../../../context/chapters-context";
import { Colors } from "../../../../../../utils/colors";
import { Label } from "../../../../../label";
import { ListItemChapterStyled } from "../list-chapter.styles";
import { ChaptersProps } from "./chapters-list";

export type ChaptersItemProps = ChaptersProps & {
    chapter: string;
};

export const ChaptersListItem: FC<ChaptersItemProps> = ({
    chapters,
    setIsOpen,
    setActiveChapter,
    setTopics,
    isOpen,
    setBestChapters,
    setBigChapter,
    chapter,
}) => {
    // const getBestArticles = (data: ChapterInfo[]) =>
    //     data.sort((a, b) => b.views - a.views);

    // const getGratest = (data: ChapterInfo[]) => {
    //     return data.reduce((prev, next): ChapterInfo => {
    //         return prev.views > next.views
    //             ? setBigChapter(prev)
    //             : setBigChapter(next);
    //     });
    // };
    const onMouseHandler = (chapter: string) => {
        setActiveChapter(chapter);
        setIsOpen(true);

        chapters.find((el) => {
            el.chapter === chapter &&
                (setTopics(el.topics),
                setBestChapters(el.best_of_chapter),
                setBigChapter(el.bigChapter));
        });
    };

    return (
        <ListItemChapterStyled
            key={chapter}
            padding="15px 0px"
            hoverColor={Colors.ORANGE}
            cursor="pointer"
            onMouseOver={() => onMouseHandler(chapter)}
            isActive={isOpen}
        >
            <Label
                color="current"
                fontSize={14}
                fontWeight={700}
                lineHeight={"1.4"}
                letterSpacing={""}
                marginRight={4}
                text={chapter}
            />
        </ListItemChapterStyled>
    );
};
