import { useState } from 'react';
import { Container } from 'react-bootstrap';
import TodoList from './Todolist/TodoList';
import Header from './Header/Header';
import ModalWindow from './Modal/Modal';

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

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
