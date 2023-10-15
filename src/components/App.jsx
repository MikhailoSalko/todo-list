import { Container } from 'react-bootstrap';
import TodoList from './Todolist/TodoList';
import Header from './Header/Header';

export const App = () => {
  return (
    <>
      <Container>
        <Header />
        <h1>TODO list</h1>
        <TodoList />
      </Container>
    </>
  );
};
