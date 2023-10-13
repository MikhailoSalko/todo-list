import { Button, Navbar } from 'react-bootstrap';

const Header = ({ handleOpenModal }) => {
  return (
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
  );
};

export default Header;
