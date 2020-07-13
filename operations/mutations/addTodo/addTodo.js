import { Todos, Todo } from "../../../models/Todos";
import { ReactiveVar } from "@apollo/client";


export default function createAddTodo(todosVar) {
  const createNewTodoId = (allTodos) => {
      return allTodos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
  };
  const createNewTodo = (text, allTodos) => {
      return { text, completed: false, id: createNewTodoId(allTodos) };
  };
  return (text) => {
      const allTodos = todosVar();
      todosVar(allTodos.concat([createNewTodo(text, allTodos)]));
  };
}