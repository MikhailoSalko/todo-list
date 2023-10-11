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
      const todo = state.todoList.findIndex(el => el.id === payload.id);
      state.todoList.splice(todo, 1, payload);
    },
  },
});

export const todoReducer = todoSlice.reducer;
export const { add, remove } = todoSlice.actions;
