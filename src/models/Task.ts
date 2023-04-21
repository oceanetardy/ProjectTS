/**
 * Tâche d'un utilisateur
 */

/**
 * TODO
 * id utilisateur : string
 * Nom de la tâche : TaskName : string
 * Détail de la tâche : TaskDetail : string
 * Statut (fini ou non) : finish  : boolean
 * Date de création : Date
 */


import {Schema , Model , model, ObjectId} from "mongoose";
import { User, IUser } from "./User";
import {strict} from "assert";


interface ITask{
    idUser : string;
    name : string;
    detail : string;
    status : string;
    date : Date;
}

const TaskSchema = new Schema<ITask>({
    idUser : {
        type: String
    },
    name : {
        type : String,
        required : true
    },
    detail : {
        type : String
    },
    status : {
        type: String,
        required : true
    },
    date : {
        type : Date,
        required : true
    }
});

const Task : Model<ITask> = model('Task',TaskSchema);

export {Task, ITask}