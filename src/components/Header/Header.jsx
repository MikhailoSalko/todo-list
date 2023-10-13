import ModalWindow from 'components/Modal/Modal';
import useModalState from 'hooks/useModalState';
import { Button, Navbar } from 'react-bootstrap';

const Header = ({ nameTodo, descriptionTodo, handleChange, handleSubmit }) => {
  const [isOpen, , handleOpenModal, handleCloseModal] = useModalState(false);
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary p-4 mb-5"
        bg="primary"
        data-bs-theme="dark"
      >
        <Button variant="primary" size="lg" onClick={handleOpenModal}>
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
