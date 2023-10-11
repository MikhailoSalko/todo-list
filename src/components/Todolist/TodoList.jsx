import React from 'react';
import { useSelector } from 'react-redux';
import Todo from 'components/Todo/Todo';
import { selectTodoList } from 'redux/selectors';

const TodoList = ({ handleDelete }) => {
  const todoList = useSelector(selectTodoList);

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
