import { FC, useContext, useEffect, useState } from "react";
import {
    ChapterContext,
    ChapterInfo,
    ChapterItem,
} from "../../../../../context/chapters-context";
import { Colors } from "../../../../../utils/colors";
import { MediaScreen } from "../../../../../utils/media";
import { WrapperBox } from "../../../../wrapper-box";
import { ChapterInfoComponent } from "./chapter-info-box/chapter-info-box";
import { ChaptersList } from "./chapter-info-box/chapters-list";
import { MobileChapters } from "./chapter-info-box/mobile-info/chapters-list";

export type DropDownProps = {
    isOpen: boolean;
    setIsOpen: (prop: boolean) => void;
};
export const DropDownChapters: FC<DropDownProps> = ({ isOpen, setIsOpen }) => {
    const { chapters, getChapters } = useContext(ChapterContext);
    const [chaptersData, setChaptersData] = useState<ChapterItem[]>([]);
    const [activeChapter, setActiveChapter] = useState("");
    const [topics, setTopics] = useState<string[]>([""]);
    const [bestOfChapters, setBestOfChapters] = useState<ChapterInfo[]>([]);
    const [bigChapter, setBigChapter] = useState<ChapterInfo>();

    useEffect(() => {
        fetchChapter();
    }, []);
    useEffect(() => {
        return getChapters(chaptersData);
    });
    const fetchChapter = async () => {
        try {
            // const response = await fetch(`${process.env.DB_HOST}/chapters/`);  need to change
            const response = await fetch("http://localhost:3000/api/chapters");
            const data = await response.json();

            setChaptersData(data);
        } catch (error) {
            (error as Error).message || "Something went wrong";
        }
    };

    return (
        <>
            <WrapperBox
                zIndex={3000}
                position="absolute"
                top="-10px"
                left="0px"
                padding={"50px 10px 0px 10px"}
                boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                background={Colors.WHITE}
                mediaHidden={MediaScreen.MOBILE}
            >
                <WrapperBox
                    borderTop={isOpen && `1px solid ${Colors.GREY_VARIANT}`}
                >
                    <ChaptersList
                        chapters={chapters}
                        setIsOpen={setIsOpen}
                        setActiveChapter={setActiveChapter}
                        setTopics={setTopics}
                        isOpen={isOpen}
                        setBestChapters={setBestOfChapters}
                        setBigChapter={setBigChapter}
                    />
                    {isOpen && (
                        <ChapterInfoComponent
                            topics={topics}
                            chapter={activeChapter}
                            best_of_chapter={bestOfChapters}
                            bigChapter={bigChapter}
                        />
                    )}
                </WrapperBox>
            </WrapperBox>
            <MobileChapters
                topics={topics}
                chapters={chapters}
                setIsOpen={setIsOpen}
            />
        </>
    );
};
