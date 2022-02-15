import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import 'dotenv/config';

import connect from '@/config/db';

class App {
    public express: Application;
    public port: number;

    constructor(port: number) {
        this.express = express();
        this.port = port;

        this.initialiseMiddleware();
        this.initialiseDatabaseConnection();
    }

    private initialiseMiddleware(): void {
        this.express.use(helmet());
        this.express.use(cors());
        this.express.use(morgan('dev'));
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: false }));
    }

    public listen(): void {
        this.express.listen(this.port, () => {
            console.log(`App listening on  http://localhost:${this.port}`);
        });
    }

    private initialiseDatabaseConnection(): void {
        connect();
    }
}

export default App;