// create user
import {Request, Response} from "express";
import {IUser, User} from "../models/User";

const addUser = async (req: Request, res: Response):Promise<IUser>=> {
    const user = new User(req.body);
    try{
        await user.save();
    }catch (e){
        res.status(500).send("error")
    }

    return user;
}

// gerUserById

const getUserById = (req: Request, res: Response) => {

}

// getAllUsers

const getAllUsers = (req: Request, res: Response) => {

}

export {addUser, getUserById, getAllUsers}