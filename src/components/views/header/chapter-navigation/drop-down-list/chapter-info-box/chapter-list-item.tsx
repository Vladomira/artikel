import { FC } from "react";
import { ChapterInfo } from "../../../../../../context/chapters-context";
import { Colors } from "../../../../../../utils/colors";
import { getBest } from "../../../../../../utils/helpers/sort-articles";
import { Label } from "../../../../../label";
import { initialBigArticle } from "../drop-down-chapters";
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
    chapter,
    setBigChapter,
}) => {
    const articlesSwitcher = (data: ChapterInfo[]) => {
        const articles = getBest(data);

        if (!articles) {
            setBigChapter(initialBigArticle);
            setBestChapters([initialBigArticle]);
        }
        if (articles?.length === 1) {
            setBigChapter(articles[0]);
        }

        if (articles?.length > 3) {
            setBestChapters(articles.slice(1, 4));
            setBigChapter(articles[0]);
        }
        if (articles?.length > 1) {
            setBestChapters(articles.slice(1, 4));
            setBigChapter(articles[0]);
        }
    };

    const onMouseHandler = (chapter: string) => {
        setActiveChapter(chapter);
        setIsOpen(true);

        chapters.find((el) => {
            el.chapter === chapter &&
                (setTopics(el.topics), articlesSwitcher(el.best_of_chapter));
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
