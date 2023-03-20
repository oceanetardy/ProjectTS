import {Request, Response} from "express";

const Home = (req : Request, res : Response) => {
    res.json({"name": "Del'ecole", "test":true});
}

export default Home;