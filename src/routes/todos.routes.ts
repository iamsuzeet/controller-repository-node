import * as express from 'express';
import {
  getAllTodos,
  getTodoById,
  postTodo,
  deleteTodoById,
  updateTodoStatusById,
  updateTodoById,
} from '../controllers/todos/todos.controller';

const todoRouter = express.Router();

todoRouter.route('/').get(getAllTodos).post(postTodo);

todoRouter
  .route('/:id')
  .get(getTodoById)
  .delete(deleteTodoById)
  .patch(updateTodoStatusById)
  .put(updateTodoById);

export default todoRouter;
