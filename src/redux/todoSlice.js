import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { nanoid } from 'nanoid';

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, { payload }) => {
      const objTodo = {
        id: nanoid(),
        completed: false,
        title: payload,
      };
      state.todoList.push(objTodo);
    },
    remove: (state, { payload }) => {
      state.todoList.filter(el => el.id !== payload);
    },
    update: (state, { payload }) => {
      const todo = state.todoList.findIndex(el => el.id === payload.id);
      state.todoList.splice(todo, 1, payload);
    },
  },
});

export const todoReducer = todoSlice.reducer;
export const { add, remove } = todoSlice.actions;
