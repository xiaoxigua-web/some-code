//state = {todos:[]}
//action = {type:"ADD_TODO",text:"Learn React"}

import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './actionType'

let defaultState = {
  todos: [
    { id: 1, content: 'Learn React', completed: false },
    { id: 2, content: 'Learn Redux', completed: false },
    { id: 3, content: 'Learn Mobx', completed: false }
  ]
}

export function todoReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, {
          content: action.text,
          completed: false,
        }]
      };
    case DELETE_TODO:
      return { todos: state.todos.filter(todo => todo.id !== action.text) };
    case TOGGLE_TODO:
      return {
        todos: state.todos.map(todo => {
          if (todo.id === action.text) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
      };
    default: return state;
  }

}