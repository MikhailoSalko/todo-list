import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import TodoList from './Todolist/TodoList';
import Header from './Header/Header';
import ModalWindow from './Modal/Modal';
import { Container } from 'react-bootstrap';
import { add, update } from 'redux/todoSlice';

export const App = () => {
  const [nameTodo, setNameTodo] = useState('');
  const [descriptionTodo, setDescriptionTodo] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

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
      <Container>
        <Header handleOpenModal={handleOpenModal} />
        {isOpen && (
          <ModalWindow isOpen={isOpen} handleCloseModal={handleCloseModal} />
        )}
        <TodoList />
      </Container>
    </>
  );
};
