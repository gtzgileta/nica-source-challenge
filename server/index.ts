import express, { json, Express, Request, Response } from "express";
import cors from "cors";
import cookieParser from 'cookie-parser';
import authRouter from './routes/auth';
import videoRouter from './routes/video';
import userRouter from './routes/user';

const app: Express = express();

app.use(cors({ credentials: true, origin: '*' }));
app.use(json());
app.use(cookieParser());

app.get("/ping", (req: Request, res: Response) => res.send("pong"));
app.use('/auth',authRouter);
app.use('/video', videoRouter);
app.use('/user', userRouter);

app.listen(5000, () => console.log("Listening"));
