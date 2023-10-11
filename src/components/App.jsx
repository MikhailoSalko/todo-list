import { selectTodoList } from 'redux/selectors';
import TodoList from './Todolist/TodoList';
import { useSelector, useDispatch } from 'react-redux';

export const App = () => {
  const handleSubmit = () => {};
  return (
    <>
      <button onClick={() => {}}>Open modal to add new task</button>
      <TodoList />
    </>
  );
};
