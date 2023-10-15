import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import Todo from 'components/Todo/Todo';
import useModalState from 'hooks/useModalState';
import ModalWindow from 'components/Modal/Modal';
import { selectFilteredTodos } from 'redux/filter/filterSelectors';

const TodoList = ({
  nameTodo,
  descriptionTodo,
  handleChange,
  handleUpdateTodo,
}) => {
  const [isOpen, , handleOpenModal, handleCloseModal] = useModalState(false);
  const todoList = useSelector(selectFilteredTodos);

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
