import React from 'react';
import { Button, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary p-4 mb-5"
      bg="primary"
      data-bs-theme="dark"
    >
      <Button variant="primary" size="lg">
        Open Modal
      </Button>
    </Navbar>
  );
};

export default Header;
