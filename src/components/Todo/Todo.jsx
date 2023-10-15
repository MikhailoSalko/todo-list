import { useDispatch } from 'react-redux';
import { Button, Card, CloseButton, Form, ListGroup } from 'react-bootstrap';
import useModalState from 'hooks/useModalState';
import { check, remove, update } from '../../redux/todo/todoSlice';
import ModalWindow from 'components/Modal/Modal';

const Todo = ({ todo }) => {
  const {
    isOpen,
    nameTodo,
    descriptionTodo,
    handleOpenModal,
    handleCloseModal,
    handleChange,
  } = useModalState({ name: todo.title, description: todo.description });

  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch(check(todo.id));
  };

  const handleDelete = () => {
    dispatch(remove(todo.id));
  };

  const handleUpdateTodo = e => {
    e.preventDefault();
    if (nameTodo.length < 4) {
      return alert("the name of todo can't be empty or shorter then 3 symbols");
    }
    dispatch(
      update({ id: todo.id, title: nameTodo, description: descriptionTodo })
    );
    handleCloseModal();
  };

  return (
    <>
      <ListGroup.Item as="li">
        <Card>
          <Card.Header className="d-flex justify-content-between align-items-start">
            <Form.Check
              inline
              label={todo.title}
              name={todo.title}
              type="checkbox"
              onChange={handleCheck}
              checked={todo.completed}
              id={todo.id}
            />
            <CloseButton aria-label="Close" onClick={handleDelete} />
          </Card.Header>
          <Card.Body>
            <Card.Text className="mb-5">{todo.description}</Card.Text>
            <Button variant="outline-primary" onClick={handleOpenModal}>
              Update todo
            </Button>
          </Card.Body>
        </Card>
      </ListGroup.Item>
      {isOpen && (
        <ModalWindow
          modalTitle={'Update your todo'}
          isOpen={isOpen}
          nameTodo={nameTodo}
          descriptionTodo={descriptionTodo}
          handleChange={handleChange}
          handleCloseModal={handleCloseModal}
          handleSubmit={handleUpdateTodo}
        />
      )}
    </>
  );
};

export default Todo;
