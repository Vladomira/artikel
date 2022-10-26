import axios, { AxiosPromise } from "axios";

export type BottomChapter = {
    chapter: string;
    topics: string[];
};
export type BottomChaptersProps = { chapters: BottomChapter[] };

export function fetchBottomChapters(): AxiosPromise<BottomChaptersProps> {
    // return axios.get(`${process.env.API_HOST}/bottom-chapters`);
    return axios.get("http://localhost:3000/api/bottom-chapters");
}
