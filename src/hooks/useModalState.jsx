import { useState } from 'react';

const useModalState = () => {
  const [nameTodo, setNameTodo] = useState('');
  const [descriptionTodo, setDescriptionTodo] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  const handleChange = ({ target: { name, value } }) => {
    name === 'nameTodo' ? setNameTodo(value) : setDescriptionTodo(value);
  };

  return {
    isOpen,
    setIsOpen,
    nameTodo,
    setNameTodo,
    descriptionTodo,
    setDescriptionTodo,
    handleOpenModal,
    handleCloseModal,
    handleChange,
  };
};

export default useModalState;
