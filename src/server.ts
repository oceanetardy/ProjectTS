import express, {Request, Response, Application} from 'express';
import home from './handlers/home'

const port : number = 8080;

const app :Application = express();

app.get('/', (req : Request,res:Response )=>{
    res.json('Test réussi');
})

app.listen(port,() => {
    console.log('server listening on port', port);

});