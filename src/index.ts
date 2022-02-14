import 'dotenv/config';
import App from './app';

const app = new App(+process.env.PORT!);

app.listen();
