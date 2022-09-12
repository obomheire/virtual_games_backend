import express, { Request, Response, NextFunction, Application, ErrorRequestHandler } from 'express'
import { Server } from 'http';
import createHttpError from 'http-errors';
import cors from 'cors'
import cookieParser from 'cookie-parser'
import session from 'express-session';
import { Error } from './utils/interface'
import starterRoute from './routes/starterRoute'
import { config } from "dotenv";
config()

const app: Application = express();
app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(session({
    secret: 'secretkey',
    resave: true,
    saveUninitialized: true
}));
app.use("/", starterRoute);

app.use((req: Request, res: Response, next: NextFunction) => {
    next(new createHttpError.NotFound());
});

const errorHandler: ErrorRequestHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500)
    res.send({
        status: err.status || 500,
        message: err.message
    })
};

app.use(errorHandler)

const PORT: number = Number(process.env.PORT) || 3000
 
const server: Server = app.listen(PORT, () => console.log(`App listning on port ${PORT}`))