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
      const todo = state.todoList.findIndex(el => {
        return el.id === payload.id;
      });
      state.todoList[todo] = {
        ...state.todoList[todo],
        title: payload.title,
        description: payload.description,
      };
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
