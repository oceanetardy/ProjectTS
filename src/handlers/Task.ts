/**
 * Tâches
 */

// create Task
import {Request, Response} from "express";
import {ITask, Task} from "../models/Task";

const addTask = async (req: Request, res: Response):Promise<void>=> {
    console.log('BODY --- ', req.body);
    const task = new Task(req.body);
    try{
        await task.save();
        res.json(task);
    }catch (e){
        res.status(500).send("error")
    }
}

// gerTaskById

const getTaskById = async (req: Request, res: Response):Promise<void> => {
    const id = req.params.id;
    try {
        const user = await Task.findById(id);
        user ? res.json(user) : res.status(404).send({error : {
                code : 404,
                message : "Not Found"
            }})
    } catch (e){
        res.status(500).json({error : e})
    }

}

// getAllTasks

const getAllTasks = async (req: Request, res: Response):Promise<void>=> {
    try {
        const tasks:ITask[]= await Task.find();
        tasks ? res.json(tasks) : res.status(404).send({error : {
                code : 404,
                message : "Not Found"
            }})
    } catch (e){
        res.status(500).json({error : e})
    }
}

export {addTask, getTaskById, getAllTasks}