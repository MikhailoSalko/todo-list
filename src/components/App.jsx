import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import TodoList from './Todolist/TodoList';
import Header from './Header/Header';
import { Container } from 'react-bootstrap';
import { add, remove, update } from 'redux/todoSlice';

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

  return (
    <>
      <Header />
      <Container>
        <TodoList />
      </Container>
    </>
  );
};
