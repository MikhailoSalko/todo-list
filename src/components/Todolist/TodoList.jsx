import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import Todo from 'components/Todo/Todo';
import { selectFilteredTodos } from 'redux/filter/filterSelectors';

const TodoList = () => {
  const todoList = useSelector(selectFilteredTodos);

  return (
    <>
      <ListGroup as="ul">
        {todoList?.length > 0 &&
          todoList.map(todo => <Todo key={todo.id} todo={todo} />)}
      </ListGroup>
    </>
  );
};

export default TodoList;
