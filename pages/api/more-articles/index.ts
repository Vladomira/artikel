import { moreArticles } from "../../../data/more-articles";

export default function getLastArticles(req, res) {
    if (req.method === "GET") {
        res.status(200).json(moreArticles);
    }
}
