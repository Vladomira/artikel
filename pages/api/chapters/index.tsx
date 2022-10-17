import { chapters } from "../../../data/chapter";

export default function getChapterHandler(req, res) {
    if (req.method === "GET") {
        res.status(200).json(chapters);
    }
}
