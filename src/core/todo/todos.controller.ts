import {
  IExpressNextFunction,
  IExpressRequest,
  IExpressResponse,
} from '../../types/express.type';
import JSONResponse from '../../utils/JSONResponse';
import TodosRepository from './todos.repository';

class TodoController {
  getAllTodos = async (req: IExpressRequest, res: IExpressResponse) => {
    try {
      const todoList = await TodosRepository.getAllTodos();
      JSONResponse.success({
        req,
        res,
        data: todoList.data,
        message: 'Todo Successfully Fetched',
      });
    } catch (err) {
      JSONResponse.failure({
        req,
        res,
      });
    }
  };

  postTodo = async (
    req: IExpressRequest,
    res: IExpressResponse,
    next: IExpressNextFunction
  ) => {
    try {
      const body = {
        title: req.body.title,
        isCompleted: false,
        id: Date.now(),
      };
      const todoList = await TodosRepository.postNewTodo(body);
      JSONResponse.success({
        req,
        res,
        data: todoList.data,
        message: 'Todo Successfully Added',
      });
    } catch (err) {
      next(err);
    }
  };

  getTodoById = async (
    req: IExpressRequest<{ id: string }>,
    res: IExpressResponse,
    next: IExpressNextFunction
  ) => {
    try {
      const todoList = await TodosRepository.getTodoById(req.params.id);
      JSONResponse.success({
        req,
        res,
        data: todoList.data,
        message: 'Todo Successfully Fetched',
      });
    } catch (err) {
      next(err);
    }
  };

  deleteTodoById = async (
    req: IExpressRequest,
    res: IExpressResponse,
    next: IExpressNextFunction
  ) => {
    try {
      const todoList = await TodosRepository.deleteTodoById(req.params.id);
      JSONResponse.success({
        req,
        res,
        data: todoList.data,
        message: 'Todo Successfully Deleted',
      });
    } catch (err) {
      next(err);
    }
  };

  updateTodoById = async (
    req: IExpressRequest,
    res: IExpressResponse,
    next: IExpressNextFunction
  ) => {
    try {
      const { id, title, isCompleted } = req.body;
      const body = {
        id,
        title,
        isCompleted,
      };
      const todoList = await TodosRepository.updateTodoById(
        req.params.id,
        body
      );
      JSONResponse.success({
        req,
        res,
        data: todoList.data,
        message: 'Todo Updated Successfully',
      });
    } catch (err) {
      next(err);
    }
  };

  updateTodoStatusById = async (
    req: IExpressRequest,
    res: IExpressResponse,
    next: IExpressNextFunction
  ) => {
    try {
      const { isCompleted } = req.body;
      const body = {
        isCompleted,
      };
      const todoList = await TodosRepository.updateTodoStatusById(
        req.params.id,
        body
      );
      JSONResponse.success({
        req,
        res,
        data: todoList.data,
        message: 'Todo status has been updated.',
      });
    } catch (err) {
      next(err);
    }
  };
}

export default new TodoController();
