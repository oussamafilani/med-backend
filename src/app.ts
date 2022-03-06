import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import 'dotenv/config';
import v1 from '@/routes/index';
import connect from '@/config/db';

import logger from './logger/logger';
class App {
    public express: Application;
    public port: number;

    constructor(port: number) {
        this.express = express();
        this.port = port;

        this.initialiseMiddleware();
        this.initialiseDatabaseConnection();
        this.initialApiRouteVersioning();
    }

    private initialiseMiddleware(): void {
        this.express.use(cors());
        this.express.use(helmet());
        this.express.use(morgan('dev'));
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: false }));
    }

    public listen(): void {
        this.express.listen(this.port, () => {
            logger.log(
                'info',
                `App listening on  http://localhost:${this.port}`
            );
        });
    }

    private initialiseDatabaseConnection(): void {
        connect();
    }

    private initialApiRouteVersioning(): void {
        this.express.use('/api/v1/', v1);
    }
}

export default App;
