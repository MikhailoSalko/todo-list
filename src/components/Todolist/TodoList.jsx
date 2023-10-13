import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import Todo from 'components/Todo/Todo';
import { selectTodoList } from 'redux/selectors';

const TodoList = ({ handleDelete }) => {
  const todoList = useSelector(selectTodoList);

  return (
    <ListGroup as="ul">
      {todoList.length > 0 &&
        todoList.map(todo => (
          <Todo key={todo.id} todo={todo} handleDelete={handleDelete} />
        ))}
    </ListGroup>
  );
};

export default TodoList;
