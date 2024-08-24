import { ADD_TODO } from "./actionType";

export function addTodoAction(text) {
  return {
    type: ADD_TODO,
    text
  }
}