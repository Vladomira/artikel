import { lastArticles } from "../../../data/last-articles";

export default function getLastArticles(req, res) {
    if (req.method === "GET") {
        res.status(200).json(lastArticles);
    }
}
