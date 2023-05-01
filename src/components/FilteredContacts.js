export const getFilteredContacts = (contacts, filter) => {
  if (filter) {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
  return contacts;
};
