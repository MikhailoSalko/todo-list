export const selectFilterValue = state => state.filter.filter;
export const selectFilteredTodos = ({
  todo: { todoList },
  filter: { filter },
}) => {
  switch (filter) {
    case 'all':
      return todoList;
    case 'completed':
      return todoList.filter(todo => todo.completed);
    case 'in progress':
      return todoList.filter(todo => !todo.completed);
    default:
      return todoList;
  }
};
