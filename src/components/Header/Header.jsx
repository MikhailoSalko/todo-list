import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Button, ButtonGroup, Navbar, ToggleButton } from 'react-bootstrap';
import ModalWindow from 'components/Modal/Modal';
import { setFilter } from 'redux/filter/filterSlice';
import useModalState from 'hooks/useModalState';
import { add } from 'redux/todo/todoSlice';
import { nanoid } from '@reduxjs/toolkit';

const radios = [
  { value: 'all' },
  { value: 'completed' },
  { value: 'in progress' },
];

const Header = () => {
  const [radioValue, setRadioValue] = useState('all');
  const {
    isOpen,
    nameTodo,
    setNameTodo,
    descriptionTodo,
    setDescriptionTodo,
    handleOpenModal,
    handleCloseModal,
    handleChange,
  } = useModalState();

  const dispatch = useDispatch();

  const handleCreate = e => {
    e.preventDefault();
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
    handleCloseModal();
  };

  const handleFilter = ({ target: { value } }) => {
    setRadioValue(value);
    dispatch(setFilter(value));
  };

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary p-4 mb-2 justify-content-between"
        bg="primary"
        data-bs-theme="dark"
      >
        <ButtonGroup>
          {radios.map(({ value }, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={
                idx === 0
                  ? 'outline-light'
                  : idx === 1
                  ? 'outline-success'
                  : 'outline-warning'
              }
              name="filter"
              value={value}
              checked={radioValue === value}
              onChange={handleFilter}
            >
              {value}
            </ToggleButton>
          ))}
        </ButtonGroup>
        <Button variant="outline-primary" size="lg" onClick={handleOpenModal}>
          Add new todo
        </Button>
      </Navbar>
      {isOpen && (
        <ModalWindow
          modalTitle={'Add new todo'}
          isOpen={isOpen}
          nameTodo={nameTodo}
          descriptionTodo={descriptionTodo}
          handleChange={handleChange}
          handleCloseModal={handleCloseModal}
          handleSubmit={handleCreate}
        />
      )}
    </>
  );
};

export default Header;
