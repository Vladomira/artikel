import { articles } from "../../../data/actual-articles";

export default function getActualArticles(req, res) {
    if (req.method === "GET") {
        res.status(200).json(articles);
    }
}
