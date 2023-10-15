import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import TodoList from './Todolist/TodoList';
import Header from './Header/Header';
import { Container } from 'react-bootstrap';
import { add, update } from 'redux/todo/todoSlice';

export const App = () => {
  const [nameTodo, setNameTodo] = useState('');
  const [descriptionTodo, setDescriptionTodo] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    name === 'nameTodo' ? setNameTodo(value) : setDescriptionTodo(value);
  };

  const handleCreate = close => {
    if (nameTodo.length < 4) {
      return alert("the name of todo can't be empty or shorter then 3 symbols");
    }
    const newTodo = {
      id: nanoid(),
      completed: false,
      title: nameTodo,
      description: descriptionTodo,
    };
    dispatch(add(newTodo));
    setNameTodo('');
    setDescriptionTodo('');
    close();
  };

  const handleUpdateTodo = () => {
    dispatch(update('good day'));
  };

  return (
    <>
      <Container>
        <Header
          nameTodo={nameTodo}
          descriptionTodo={descriptionTodo}
          handleChange={handleChange}
          handleSubmit={handleCreate}
        />
        <h1>TODO list</h1>
        <TodoList
          nameTodo={nameTodo}
          descriptionTodo={descriptionTodo}
          handleChange={handleChange}
          handleUpdateTodo={handleUpdateTodo}
        />
      </Container>
    </>
  );
};
