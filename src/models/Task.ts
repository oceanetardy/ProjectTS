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


import {Schema , Model , model} from "mongoose";

interface ITask{
    name : string;
    detail : string;
    status : boolean;
    date : Date;
}

const TaskSchema = new Schema<ITask>({
    name : {
        type : String,
        unique : true,
        required : true
    },
    detail : {
        type : String
    },
    status : {
        type: Boolean,
        required : true
    },
    date : {
        type : Date,
        required : true
    }
});

const Task : Model<ITask> = model('Task',TaskSchema);

export {Task, ITask}