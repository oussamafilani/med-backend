import mongoose from 'mongoose';
import 'dotenv/config';

import logger from '@/logger/index';

function connect(): Promise<void> {
    return mongoose
        .connect(process.env.MONGO_PATH as string)
        .then(() => {
            logger.log('info', 'Database connected');
        })
        .catch((error) => {
            logger.log('info', 'db error', error);
            process.exit(1);
        });
}

export default connect;
