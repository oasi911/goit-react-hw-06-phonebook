import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';

export const App = () => {
  const { filter, contacts } = useSelector(state => ({
    filter: selectFilter(state),
    contacts: selectContacts(state),
  }));

  const getFilteredContacts = () => {
    if (filter) {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
    return contacts;
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter value={filter} />
      {contacts.length ? (
        <ContactList contacts={getFilteredContacts()} />
      ) : (
        <p style={{ paddingLeft: '40px' }}>Please add at least 1 contact</p>
      )}
    </>
  );
};
