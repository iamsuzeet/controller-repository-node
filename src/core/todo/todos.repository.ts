import axiosInstance from '../../config/axios';
import { ITodoList } from './todos.interface';

const postFixEndpoint = '/todos';

class TodoRepository {
  async getAllTodos() {
    return await axiosInstance.get<ITodoList>(postFixEndpoint);
  }

  async postNewTodo(body: ITodoList) {
    return await axiosInstance.post<ITodoList>('/todos', body);
  }

  async getTodoById(id: string) {
    return await axiosInstance.get<ITodoList>(`/todos/${id}`);
  }

  async deleteTodoById(id: string) {
    return await axiosInstance.delete<ITodoList>(`/todos/${id}`);
  }

  async updateTodoById(id: string, body: ITodoList) {
    return await axiosInstance.put<ITodoList>(`/todos/${id}`, body);
  }

  async updateTodoStatusById(id: string, body: { isCompleted: boolean }) {
    return await axiosInstance.patch<ITodoList>(`/todos/${id}`, body);
  }
}

export default new TodoRepository();
