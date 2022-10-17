import React, { useState, PropsWithChildren } from "react";

export type ChapterInfo = {
    topic: string;
    title: string;
    author: string;
    id: number;
    data: string;
    time_reading: number;
    liked: number;
    img: string;
    imgFolder?: string;
    format?: string;
};
export type ChapterItem = {
    chapter: string;
    topics: string[];
    best_of_chapter?: ChapterInfo[];
    bigChapter?: ChapterInfo;
};
export type ChapterListProps = {
    chapters: ChapterItem[];
};
type ContextType = {
    chapters: Partial<ChapterItem[]>;
    getChapters: (chapters: Partial<ChapterItem[]>) => void;
};
export const ChapterContext = React.createContext<ContextType>({
    chapters: [],
    getChapters: () => [],
});

export const ChaptersProvider = ({ children }: PropsWithChildren) => {
    const [chapters, setChapters] = useState<ChapterItem[]>([]);

    const getChapters = (chapters: Partial<ChapterItem[]>) =>
        setChapters(chapters);

    return (
        <ChapterContext.Provider
            value={{
                chapters,
                getChapters,
            }}
        >
            {children}
        </ChapterContext.Provider>
    );
};
