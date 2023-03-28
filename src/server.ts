import express, { Application, Request, Response} from 'express';
import {connect} from 'mongoose';
import {getAllUsers, getUserById, addUser} from "./handlers/User";
import {getAllTasks, getTaskById, addTask, deleteTask, getAllTasksByUser} from "./handlers/Task";


const port : number = 8080;

const app :Application = express();
app.use(express.json());

//Routes pour users
app.get('/users/:id', getUserById);
app.get('/users',  getAllUsers );
app.post('/users', addUser);

//Routes pour tasks
app.get('/tasks/:id', getTaskById);
app.get('/tasks/',  getAllTasks );
app.post('/tasks', addTask);
app.get('/tasks/delete/:id', deleteTask);
app.get('/users/:id/tasks', getAllTasksByUser);



/**TODO
 * Route pour les tâches : /tasks  --> addTask (post) -> getAllTask (get)
 * Route pour une tâche : /tasks/:id (get)
 * Route pour les tâches d'un utilisateurs : /users/:id/tasks  --> getZllTaskByUser (get)
 * Route pour delete : /tasks/:id
 */


const dbConnect = async ():Promise<void> =>{
    const uri : string = "mongodb+srv://oceane:7XHQCopt3B7PbxNN@cluster0.av0pf2z.mongodb.net/testbase?retryWrites=true&w=majority"
    try {
        const cnx = await connect(uri);
        console.log('Mongo connecté')
    } catch (error){
        console.log(error);
    }
}


//Start server
app.listen(port,() => {
    //Connection base
    dbConnect();
    console.log('server listening on port', port);

});