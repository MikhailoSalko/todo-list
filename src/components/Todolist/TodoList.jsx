import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Todo from 'components/Todo/Todo';
import { selectTodoList } from 'redux/selectors';
import { remove, add, update } from 'redux/todoSlice';

const TodoList = () => {
  const todoList = useSelector(selectTodoList);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(remove(id));
  };

  return (
    <ul>
      {todoList.length > 0 &&
        todoList.map(todo => (
          <Todo key={todo.id} todo={todo} handleDelete={handleDelete} />
        ))}
    </ul>
  );
};

export default TodoList;
