import React from 'react';
import { Button, Card, CloseButton, Form, ListGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { check, remove } from '../../redux/todoSlice';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch(check(todo.id));
  };

  const handleDelete = () => {
    dispatch(remove(todo.id));
  };

  return (
    // <li className="list-group-item">
    //   <Form className="col justify-content-between">
    //     <Form.Check
    //       className="mb-3"
    //       inline
    //       label={todo.title}
    //       name={todo.title}
    //       type="checkbox"
    //       onChange={handleCheck}
    //       checked={todo.completed}
    //       id={todo.id}
    //     />
    //     <Form.Text>{todo.description}</Form.Text>
    //     <CloseButton aria-label="Close" onClick={handleDelete} />
    //   </Form>
    // </li>
    <ListGroup.Item as="li">
      <Card>
        <Card.Header className="align-items-center">
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
          <Card.Text>{todo.description}</Card.Text>
          <Button variant="primary">Update todo</Button>
        </Card.Body>
      </Card>
    </ListGroup.Item>
  );
};

export default Todo;
