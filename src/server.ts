import express, { Application, Request, Response} from 'express';
import {connect} from 'mongoose';
import {IUser, User} from "./models/User";
import home from './handlers/home';

const port : number = 8080;

const app :Application = express();

// app.get('/', (req : Request,res:Response )=>{
//     res.json('Test réussi');
// })

// app.get('/', home);

app.get('/', async (req : Request, res:Response)=>{
    const user= new User({
        email : "test@test.com",
        name : "Name test"
    });
    await user.save();
    res.json(user);
});

const dbConnect = async ():Promise<void> =>{
    const uri : string = "mongodb+srv://oceane:7XHQCopt3B7PbxNN@cluster0.av0pf2z.mongodb.net/testbase?retryWrites=true&w=majority"
    try {
        const cnx = await connect(uri);
        console.log('Mongo connecté', cnx)
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