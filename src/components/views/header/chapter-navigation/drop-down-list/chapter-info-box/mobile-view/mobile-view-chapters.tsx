import { FC, useEffect, useState } from "react";
import { ChapterItem } from "../../../../../../../context/chapters-context";
import { MediaScreen } from "../../../../../../../utils/media";
import { PureModal } from "../../../../../../modal-box/pure-modal";
import { WrapperBox } from "../../../../../../wrapper-box";
import { MobileViewChapters } from "./mobile-view-chapterss";
import { MobileViewTopics } from "./mobile-view-topics";

export type ChapterInfoBoxProps = {
    chapters: ChapterItem[];
    setIsOpen: (prop: boolean) => void;
};

export const MobileChapters: FC<ChapterInfoBoxProps> = ({
    chapters,
    setIsOpen,
}) => {
    const [choosenChapter, setChoosenChapter] = useState<string>("");
    const [topics, setTopics] = useState<string[]>([""]);

    useEffect(() => {
        chapters.map(
            (el) => el.chapter === choosenChapter && setTopics(el.topics)
        );
    }, [choosenChapter, chapters]);
    return (
        <PureModal
            setIsOpen={setIsOpen}
            padding="50px 10%"
            mediaHidden={MediaScreen.DESKTOP}
            backArrow={choosenChapter !== ""}
            onBackClick={() => setChoosenChapter("")}
        >
            <WrapperBox
                justifyContent="center"
                direction="column"
                marginTop={30}
            >
                {choosenChapter === "" ? (
                    <MobileViewChapters
                        chapters={chapters}
                        setChoosenChapter={setChoosenChapter}
                    />
                ) : (
                    <MobileViewTopics
                        topics={topics}
                        chapterName={choosenChapter}
                        setChoosenChapter={setChoosenChapter}
                    />
                )}
            </WrapperBox>
        </PureModal>
    );
};
