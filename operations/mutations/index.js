import createAddTodo from "./addTodo/addTodo";
import createSetVisibilityFilter from "./setVisibilityFilter/setVisibilityFilter";
import { todosVar, visibilityFilterVar } from "../../cache";

export const todoMutations = {
  addTodo: createAddTodo(todosVar),
  setVisibilityFilter: createSetVisibilityFilter(visibilityFilterVar)
}
