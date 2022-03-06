import mongoose from 'mongoose';

import logger from '../logger/logger';

// import config from 'config';

function connect(): Promise<void> {
    // const dbUri = config.get('dbUri') as string;

    return mongoose
        .connect('mongodb://localhost:27017/tanger_med')
        .then(() => {
            logger.log('info', 'Database connected');
        })
        .catch((error) => {
            logger.log('info', 'db error', error);
            process.exit(1);
        });
}

export default connect;
