import { useDispatch, useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import Todo from 'components/Todo/Todo';
import ModalWindow from 'components/Modal/Modal';
import { selectFilteredTodos } from 'redux/filter/filterSelectors';
import useModalState from 'hooks/useModalState';
import { update } from 'redux/todo/todoSlice';

const TodoList = () => {
  const todoList = useSelector(selectFilteredTodos);
  const dispatch = useDispatch();
  const {
    isOpen,
    nameTodo,
    setNameTodo,
    descriptionTodo,
    setDescriptionTodo,
    handleOpenModal,
    handleCloseModal,
    handleChange,
  } = useModalState(false);

  const handleUpdateTodo = e => {
    e.preventDefault();
    if (nameTodo.length < 4) {
      return alert("the name of todo can't be empty or shorter then 3 symbols");
    }
    dispatch(update());
    setNameTodo('');
    setDescriptionTodo('');
    handleCloseModal();
  };

  return (
    <>
      <ListGroup as="ul">
        {todoList?.length > 0 &&
          todoList.map(todo => (
            <Todo key={todo.id} todo={todo} handleOpenModal={handleOpenModal} />
          ))}
      </ListGroup>
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

export default TodoList;
