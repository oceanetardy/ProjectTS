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


import { Schema , Model , model, ObjectId } from "mongoose";
import { User, IUser } from "./User";
interface ITask{
    user : ObjectId|IUser;
    name : string;
    detail : string;
    status : boolean;
    date : Date;
}

const TaskSchema = new Schema<ITask>({
    user : {
        type : Schema.Types.ObjectId,
        ref : 'User',
        required : true

    },
    name : {
        type : String,
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