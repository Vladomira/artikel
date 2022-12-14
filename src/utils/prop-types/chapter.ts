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
};
export type ChapterList = {
    chapter: string;
    topics: string[];
    best_of_chapter: ChapterInfo[];
};
