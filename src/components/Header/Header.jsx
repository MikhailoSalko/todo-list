import ModalWindow from 'components/Modal/Modal';
import useModalState from 'hooks/useModalState';
import { useState } from 'react';
import { Button, ButtonGroup, Navbar, ToggleButton } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { update } from 'redux/todo/todoSlice';

const radios = [
  { value: 'all' },
  { value: 'completed' },
  { value: 'in progress' },
];

const Header = ({ nameTodo, descriptionTodo, handleChange, handleSubmit }) => {
  const [radioValue, setRadioValue] = useState('all');
  const [isOpen, , handleOpenModal, handleCloseModal] = useModalState(false);

  const dispatch = useDispatch();

  const handleFilter = ({ target }) => {
    setRadioValue(target.value);
    dispatch(update(target.value));
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
          Open Modal
        </Button>
      </Navbar>
      {isOpen && (
        <ModalWindow
          isOpen={isOpen}
          nameTodo={nameTodo}
          descriptionTodo={descriptionTodo}
          handleChange={handleChange}
          handleCloseModal={handleCloseModal}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
};

export default Header;
