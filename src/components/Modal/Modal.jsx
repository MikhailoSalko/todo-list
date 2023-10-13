import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { add } from 'redux/todoSlice';

const ModalWindow = ({ isOpen, handleCloseModal }) => {
  const [nameTodo, setNameTodo] = useState('');
  const [descriptionTodo, setDescriptionTodo] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    target.name === 'nameTodo'
      ? setNameTodo(target.value)
      : setDescriptionTodo(target.value);
  };

  const handleCreate = e => {
    e.preventDefault();
    if (nameTodo.length < 4) {
      return alert("the name of todo can't be empty or shorter then 3 symbols");
    }
    const newTodo = {
      id: nanoid(),
      completed: false,
      title: nameTodo,
      description: descriptionTodo,
    };
    dispatch(add(newTodo));
    setNameTodo('');
    setDescriptionTodo('');
    handleCloseModal();
  };

  return (
    <Modal backdrop={true} show={isOpen} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add your todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Add the name of todo</Form.Label>
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
            <Form.Label>Add the description of todo</Form.Label>
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
          type="submit"
          onClick={handleCreate}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalWindow;
