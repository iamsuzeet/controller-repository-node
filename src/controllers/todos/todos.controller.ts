import axiosInstance from '../../config/axios';
import {
  IExpressRequest,
  IExpressResponse,
  IExpressNextFunction,
} from '../../types/express.type';
import JSONResponse from '../../utils/JSONResponse';
import { ITodoList } from './todos.interface';

const getAllTodos = async (req: IExpressRequest, res: IExpressResponse) => {
  try {
    const todoList = await axiosInstance.get<ITodoList>('/todos');
    return JSONResponse.success({
      req,
      res,
      data: todoList.data,
      message: 'Todo List Successfully fetched',
    });
  } catch (err) {
    JSONResponse.failure({
      req,
      res,
    });
  }
};

const postTodo = async (
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
    const todoList = await axiosInstance.post<ITodoList>('/todos', body);
    JSONResponse.success({
      req,
      res,
      data: body,
      message: 'Todo Successfully Added',
    });
  } catch (err) {
    next(err);
  }
};

const getTodoById = async (
  req: IExpressRequest,
  res: IExpressResponse,
  next: IExpressNextFunction
) => {
  try {
    const todoList = await axiosInstance.get<ITodoList>(
      `/todos/${req.params.id}`
    );
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

const deleteTodoById = async (
  req: IExpressRequest,
  res: IExpressResponse,
  next: IExpressNextFunction
) => {
  try {
    const todoList = await axiosInstance.delete<ITodoList>(
      `/todos/${req.params.id}`
    );
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

const updateTodoById = async (
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
    const todoList = await axiosInstance.put<ITodoList>(
      `/todos/${req.params.id}`,
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

const updateTodoStatusById = async (
  req: IExpressRequest,
  res: IExpressResponse,
  next: IExpressNextFunction
) => {
  try {
    const { isCompleted } = req.body;
    const body = {
      isCompleted,
    };
    const todoList = await axiosInstance.patch<ITodoList>(
      `/todos/${req.params.id}`,
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

export {
  getAllTodos,
  postTodo,
  getTodoById,
  deleteTodoById,
  updateTodoById,
  updateTodoStatusById,
};
