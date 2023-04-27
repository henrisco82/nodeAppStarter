import express, { Application, Request, Response} from 'express';

export const hello = () => 'Hello world!'; 

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
    res.send("hello world!!");
})


app.listen(5000, () => console.log('Server running'));