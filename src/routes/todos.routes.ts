import * as express from 'express';
import TodoController from '../core/todo/todos.controller';

const todoRouter = express.Router();

const {
  getAllTodos,
  postTodo,
  getTodoById,
  deleteTodoById,
  updateTodoById,
  updateTodoStatusById,
} = TodoController;

todoRouter.route('/').get(getAllTodos).post(postTodo);

todoRouter
  .route('/:id')
  .get(getTodoById)
  .delete(deleteTodoById)
  .patch(updateTodoStatusById)
  .put(updateTodoById);

export default todoRouter;
