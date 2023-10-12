import React from 'react';
import { CloseButton, Form } from 'react-bootstrap';
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
    <li className="list-group-item">
      <div className="row justify-content-between">
        <Form.Check
          inline
          label={todo.title}
          name={todo.title}
          type="checkbox"
          onChange={handleCheck}
          checked={todo.completed}
          id={todo.id}
        />
        <p>{todo.title}</p>
        <p>{todo.description}</p>
        <CloseButton aria-label="Close" onClick={handleDelete} />
      </div>
    </li>
  );
};

export default Todo;
