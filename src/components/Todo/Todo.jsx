import React from 'react';
import { Button, Card, CloseButton, Form, ListGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { check, remove } from '../../redux/todo/todoSlice';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch(check(todo.id));
  };

  const handleDelete = () => {
    dispatch(remove(todo.id));
  };

  return (
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
          <Button variant="outline-primary" onClick={() => {}}>
            Update todo
          </Button>
        </Card.Body>
      </Card>
    </ListGroup.Item>
  );
};

export default Todo;
