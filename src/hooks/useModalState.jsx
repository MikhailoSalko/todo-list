import { useState } from 'react';

const useModalState = (boolean = false) => {
  const [isOpen, setIsOpen] = useState(boolean);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  return [isOpen, setIsOpen, handleOpenModal, handleCloseModal];
};

export default useModalState;
