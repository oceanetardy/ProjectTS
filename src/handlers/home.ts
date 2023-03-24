import {Request, Response} from "express";

const Home = (req : Request, res : Response) => {
    res.json({"name": "Réussi", "test":true});
}

export default Home;