import { authors } from "../../../data/popular-authors";

export default function getActualArticles(req, res) {
    if (req.method === "GET") {
        res.status(200).json(authors);
    }
}
