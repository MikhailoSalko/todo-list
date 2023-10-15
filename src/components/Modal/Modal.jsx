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
        <Form>
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
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button
          variant="primary"
          disabled={nameTodo.length === 0}
          onClick={() => handleSubmit(handleCloseModal)}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalWindow;
