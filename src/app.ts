import * as express from 'express';
import todoRouter from './routes/todos.routes';
// import path from 'path';

const app = express();

// app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.use('/todos', todoRouter);

export default app;
