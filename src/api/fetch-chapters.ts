import { ChapterItem } from "../context/chapters-context";

export const fetchChapter = async (): Promise<ChapterItem[]> => {
    try {
        // const response = await fetch(`${process.env.API_HOST}/chapters/`);  need to change
        const response = await fetch("http://localhost:3000/api/chapters");
        const data = await response.json();
        console.log("ax", data);
        return data;
    } catch (error) {
        (error as Error).message || "Something went wrong";
    }
};
