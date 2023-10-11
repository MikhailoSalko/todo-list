import { useSelector, useDispatch } from 'react-redux';
import TodoList from './Todolist/TodoList';
import { add, remove, update } from 'redux/todoSlice';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';

export const App = () => {
  const [nameTodo, setNameTodo] = useState('');
  const [descriptionTodo, setDescriptionTodo] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    target.name === 'nameTodo'
      ? setNameTodo(target.value)
      : setDescriptionTodo(target.value);
  };
  const handleCreate = e => {
    e.preventDefault();
    const newTodo = {
      id: nanoid(),
      completed: false,
      title: nameTodo,
      description: descriptionTodo,
    };
    dispatch(add(newTodo));
    setNameTodo('');
    setDescriptionTodo('');
  };

  const handleDelete = id => {
    dispatch(remove(id));
  };
  return (
    <>
      {/* <button onClick={() => {}}>Open modal to add new task</button> */}
      <div>
        <label>
          <input
            type="text"
            name="nameTodo"
            onChange={handleChange}
            value={nameTodo}
          />
        </label>
        <br />
        <label htmlFor="">
          <textarea
            type="text"
            name="descriptionTodo"
            onChange={handleChange}
            value={descriptionTodo}
          />
        </label>

        <button type="submit" onClick={handleCreate}>
          add todo
        </button>
      </div>
      <TodoList handleDelete={handleDelete} />
    </>
  );
};
