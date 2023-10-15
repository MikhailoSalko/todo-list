import { Button, Form, Modal } from 'react-bootstrap';

const ModalWindow = ({
  modalTitle,
  isOpen,
  nameTodo,
  descriptionTodo,
  handleChange,
  handleSubmit,
  handleCloseModal,
}) => {
  return (
    <Modal backdrop={true} show={isOpen} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Todo name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Buy fresh vegetables"
              autoFocus
              name="nameTodo"
              value={nameTodo}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Todo description</Form.Label>
            <Form.Control
              as="textarea"
              name="descriptionTodo"
              value={descriptionTodo}
              rows={3}
              onChange={handleChange}
              placeholder="Tomatos, cucambers, potatoes"
            />
          </Form.Group>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button
            type="submit"
            className="m-1"
            variant="primary"
            disabled={nameTodo.length === 0}
          >
            Save Changes
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default ModalWindow;
