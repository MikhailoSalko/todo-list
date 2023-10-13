export const selectFilterValue = state => state.filter.filter;
export const getFilteredContacts = ({
  contacts: { contacts },
  filter: { filter },
}) =>
  contacts.filter(({ name }) => {
    return name.toLowerCase().trim().includes(filter.toLowerCase().trim());
  });
