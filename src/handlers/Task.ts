/**
 * Tâches
 */

// create Task
import {Request, Response} from "express";
import {ITask, Task} from "../models/Task";


const addTask = async (req: Request, res: Response):Promise<void>=> {
    // console.log('BODY --- ', req.body);
    const task = new Task(req.body);
    try{
        await task.save();
        res.json(task);
    }catch (e){
        console.log(e)
        res.status(500).send({error : e})
    }
}

const updateTask = async (req: Request, res: Response): Promise<void> =>
{
    // Récupération de l'identifiant de la tâche
    const id: string = req.params.id;

    // Try-catch de la modification
    try {
        // Modification de la tâche
        await Task.findByIdAndUpdate(id, req.body);
        // Retour de la tâche
        res.status(200).json(await Task.findById(id));
    } catch (error) {
        // Retour de l'erreur
        console.log(error);
        res.status(500).json(error);
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


const deleteTask = async (req: Request, res: Response):Promise<void> => {
    const id = req.params.id;
    try {
        const task = await Task.findById(id);
        await  Task.findByIdAndDelete(id);
        task ? res.json(task) : res.status(404).send({error : {
                code : 404,
                message : "Not Found"
            }})
    } catch (e){
        res.status(500).json({error : e})
    }

}


const getTasksByUser = async (request: Request, response: Response): Promise<void> => {

    const id = request.params.id;

    try {
        const task : ITask[] = await Task.find({"user": id});
        task ? response.json(task) : response.status(404).send({error : {
                code : 404,
                message : "Not found"
            }});
    }catch(error) {
        response.status(500).json({error : error});
    }

}



export {addTask, getTaskById, getAllTasks, deleteTask, getTasksByUser, updateTask}