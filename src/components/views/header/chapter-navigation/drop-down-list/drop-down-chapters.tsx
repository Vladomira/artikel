import { FC, useContext, useEffect, useState } from "react";
import {
    ChapterContext,
    ChapterInfo,
    ChapterItem,
} from "../../../../../context/chapters-context";
import { Colors } from "../../../../../utils/colors";
import { MediaScreen } from "../../../../../utils/media";
import { CloseButton } from "../../../../close-button";
import { WrapperBox } from "../../../../wrapper-box";
import { ChapterInfoComponent } from "./chapter-info-box/chapter-info-box";
import { ChaptersList } from "./chapter-info-box/chapters-list";
import { MobileChapters } from "./chapter-info-box/mobile-view/mobile-view-chapters";

export const initialBigArticle: ChapterInfo = {
    topic: "",
    title: "",
    author: "",
    id: 0,
    data: "",
    time_reading: 0,
    liked: 0,
    img: "",
    views: 0,
};
export type DropDownProps = {
    setIsClicked: (prop: boolean) => void;
};
export const DropDownChapters: FC<DropDownProps> = ({ setIsClicked }) => {
    const { chapters, getChapters } = useContext(ChapterContext);
    const [chaptersData, setChaptersData] = useState<ChapterItem[]>([]);
    const [activeChapter, setActiveChapter] = useState("");
    const [topics, setTopics] = useState<string[]>([""]);
    const [bestOfChapters, setBestOfChapters] = useState<ChapterInfo[]>([]);
    const [bigChapter, setBigChapter] =
        useState<ChapterInfo>(initialBigArticle);
    const [isOpenInfo, setIsOpenInfo] = useState(false);

    useEffect(() => {
        fetchChapter();
    }, []);
    useEffect(() => {
        getChapters(chaptersData);
    }, [chaptersData]);

    const fetchChapter = async () => {
        try {
            // const response = await fetch(`${process.env.API_HOST}/chapters/`);  need to change
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
                top="-20px"
                left="0px"
                direction="column"
                padding={"10px 10px 0px 10px"}
                boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                background={Colors.WHITE}
                mediaHidden={MediaScreen.MOBILE}
                minWidth={"180px"}
                maxWidth={1066}
                marginTop={10}
            >
                {isOpenInfo && (
                    <WrapperBox justifyContent="end">
                        <CloseButton
                            setIsOpen={setIsClicked}
                            color="currentColor"
                            width={20}
                            height={20}
                            colorWrapper={Colors.ORANGE}
                            hoverColor={Colors.LABEL_GREY}
                        />
                    </WrapperBox>
                )}
                <WrapperBox
                    marginTop={isOpenInfo ? 10 : 33}
                    borderTop={isOpenInfo && `1px solid ${Colors.GREY_VARIANT}`}
                >
                    <ChaptersList
                        chapters={chapters}
                        setIsOpen={setIsOpenInfo}
                        setActiveChapter={setActiveChapter}
                        setTopics={setTopics}
                        isOpen={isOpenInfo}
                        setBestChapters={setBestOfChapters}
                        setBigChapter={setBigChapter}
                    />
                    {isOpenInfo && (
                        <ChapterInfoComponent
                            topics={topics}
                            chapter={activeChapter}
                            best_of_chapter={bestOfChapters}
                            bigChapter={bigChapter}
                        />
                    )}
                </WrapperBox>
            </WrapperBox>

            <MobileChapters chapters={chapters} setIsOpen={setIsClicked} />
        </>
    );
};
