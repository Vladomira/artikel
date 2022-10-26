import { bottomChapters } from "../../../data/bottom-chapters";

export default function getActualArticles(req, res) {
    if (req.method === "GET") {
        res.status(200).json(bottomChapters);
    }
}
