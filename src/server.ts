import express, { Application, Request, Response} from 'express';
import {connect} from 'mongoose';
import {getAllUsers, getUserById, addUser} from "./handlers/User";

const port : number = 8080;

const app :Application = express();
app.use(express.json());

//Routes pour users
app.get('/users/:id', getUserById);
app.get('/users',  getAllUsers );
app.post('/users', addUser);



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