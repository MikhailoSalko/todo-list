import React from 'react';

const Todo = ({ todo, check, handleDelete }) => {
  const handleCheck = () => {};
  return (
    <li className="list-group-item">
      <div className="row justify-content-between">
        <div className="col-10">
          <input
            className="form-check-input me-2"
            type="checkbox"
            onChange={handleCheck}
            checked={todo.completed}
          />
        </div>
        <div>
          <p>{todo.title}</p>
        </div>
        <div>
          <p>{todo.description}</p>
        </div>
        <div className="col">
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => handleDelete(todo.id)}
          >
            delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default Todo;
