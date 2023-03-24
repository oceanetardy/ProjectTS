import express, {Request, Response, Application} from 'express';
import mongoose,{Connection, connect} from 'mongoose';
import home from './handlers/home';

const port : number = 8080;

const app :Application = express();

// app.get('/', (req : Request,res:Response )=>{
//     res.json('Test réussi');
// })

app.get('/', home);

const dbConnect = async ():Promise<void> =>{
    const uri : string = "mongodb+srv://oceane:7XHQCopt3B7PbxNN@cluster0.av0pf2z.mongodb.net/?retryWrites=true&w=majority"
    try {
        const cnx = await connect(uri);
        console.log('Mongo connecté', cnx)
    } catch (error){
        console.log(error);
    }
}
//Connection base
dbConnect();


//Start server
app.listen(port,() => {
    console.log('server listening on port', port);

});