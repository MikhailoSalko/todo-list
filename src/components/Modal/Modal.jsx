import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { add } from 'redux/todoSlice';

const Modal = ({ handleCreate }) => {
  const [nameTodo, setNameTodo] = useState('');
  const [descriptionTodo, setDescriptionTodo] = useState('');
  const handleChange = ({ target }) => {
    if (target.name === 'nameTodo') {
      setNameTodo(target.value);
    }
    setDescriptionTodo(target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const newTodo = {
      id: nanoid(),
      completed: false,
      title: nameTodo,
      description: descriptionTodo,
    };
    add(newTodo);
    setNameTodo('');
    setDescriptionTodo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="nameTodo" className="form-label">
          To-Do Name:
        </label>
        <input
          id="nameTodo"
          name="nameTodo"
          type="text"
          className="form-control"
          onChange={handleChange}
          value={nameTodo}
        />
        <label htmlFor="descriptionTodo" className="form-label">
          To-Do description:
        </label>
        <textarea
          id="descriptionTodo"
          name="descriptionTodo"
          type="text"
          className="form-control"
          onChange={handleChange}
          value={descriptionTodo}
        />
      </div>
    </form>
  );
};

export default Modal;
