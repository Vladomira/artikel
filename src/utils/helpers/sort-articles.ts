import { ChapterInfo } from "../prop-types/chapter";

export const getBest = (data: ChapterInfo[]) =>
    data?.sort((a, b) => b.views - a.views);
