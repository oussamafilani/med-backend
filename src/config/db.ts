import mongoose from 'mongoose';
// import config from 'config';

function connect(): Promise<void> {
    // const dbUri = config.get('dbUri') as string;

    return mongoose
        .connect('mongodb://localhost:27017/tanger_med')
        .then(() => {
            console.info('Database connected');
        })
        .catch((error) => {
            console.error('db error', error);
            process.exit(1);
        });
}

export default connect;
