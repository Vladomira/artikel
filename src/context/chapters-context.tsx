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
    views: number;
    imgFolder?: string;
    format?: string;
};
export type ChapterItem = {
    chapter: string;
    topics: string[];
    best_of_chapter?: ChapterInfo[];
};
export type ChapterListProps = {
    chapters: ChapterItem[];
};
type ContextType = {
    chapters: ChapterItem[];
    getChapters: (chapters: ChapterItem[]) => void;
};
export const ChapterContext = React.createContext<ContextType>({
    chapters: [],
    getChapters: () => [],
});

export const ChaptersProvider = ({ children }: PropsWithChildren) => {
    const [chapters, setChapters] = useState<ChapterItem[]>([]);

    const getChapters = (chapters: ChapterItem[]) => setChapters(chapters);

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
