import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, { payload }) => {
      state.todoList.push(payload);
    },
    remove: (state, { payload }) => {
      state.todoList = state.todoList.filter(el => el.id !== payload);
    },
    update: (state, { payload }) => {
      console.log(payload);
      const todo = state.todoList.findIndex(el => {
        console.log(el);
        return el.id === payload.id;
      });
      console.log(todo);
      state.todoList.splice(todo, 1, payload);
    },
    check: (state, { payload }) => {
      state.todoList = state.todoList.map(el => {
        if (el.id === payload) {
          el.completed = !el.completed;
        }
        return el;
      });
    },
  },
});

export const todoReducer = todoSlice.reducer;
export const { add, remove, update, check } = todoSlice.actions;
