import { FC } from "react";
import {
    ChapterInfo,
    ChapterListProps,
} from "../../../../../../context/chapters-context";
import { Colors } from "../../../../../../utils/colors";
import { ListChapterStyled } from "../list-chapter.styles";
import { ChaptersListItem } from "./chapter-list-item";

export type ChaptersProps = ChapterListProps & {
    setActiveChapter: (prop: string) => void;
    setIsOpen: (prop: boolean) => void;
    setTopics: (props: string[]) => void;
    setBestChapters: (props: ChapterInfo[]) => void;
    setBigChapter: (props: ChapterInfo) => void;
    isOpen: boolean;
};

export const ChaptersList: FC<ChaptersProps> = ({
    chapters,
    setIsOpen,
    setActiveChapter,
    setTopics,
    isOpen,
    setBestChapters,
    setBigChapter,
}) => {
    return (
        <ListChapterStyled
            overflow="unset"
            background={Colors.WHITE}
            isActive={isOpen}
        >
            {chapters &&
                chapters.map(({ chapter }) => (
                    <ChaptersListItem
                        key={chapter}
                        chapter={chapter}
                        chapters={chapters}
                        setIsOpen={setIsOpen}
                        setActiveChapter={setActiveChapter}
                        setTopics={setTopics}
                        isOpen={isOpen}
                        setBestChapters={setBestChapters}
                        setBigChapter={setBigChapter}
                    />
                ))}
        </ListChapterStyled>
    );
};
