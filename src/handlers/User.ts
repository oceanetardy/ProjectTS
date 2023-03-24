// create user
import {Request, Response} from "express";
import {IUser, User} from "../models/User";

const addUser = async (req: Request, res: Response):Promise<void>=> {
    console.log('BODY --- ', req.body);
    const user = new User(req.body);
    try{
        await user.save();
        res.json(user);
    }catch (e){
        res.status(500).send("error")
    }
}

// gerUserById

const getUserById = async (req: Request, res: Response):Promise<void> => {
    const id = req.params.id;
    try {
        const user = await User.findById(id);
        user ? res.json(user) : res.status(404).send({error : {
            code : 404,
                message : "Not Found"
            }})
    } catch (e){
        res.status(500).json({error : e})
    }

}

// getAllUsers

const getAllUsers = async (req: Request, res: Response):Promise<void>=> {
    try {
        const users:IUser[]= await User.find();
        users ? res.json(users) : res.status(404).send({error : {
                code : 404,
                message : "Not Found"
            }})
    } catch (e){
        res.status(500).json({error : e})
    }
}

export {addUser, getUserById, getAllUsers}