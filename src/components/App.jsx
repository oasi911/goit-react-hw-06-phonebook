import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { getFilteredContacts } from './FilteredContacts';

export const App = () => {
  const { filter, contacts } = useSelector(state => ({
    filter: selectFilter(state),
    contacts: selectContacts(state),
  }));

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter value={filter} />
      {contacts.length ? (
        <ContactList contacts={getFilteredContacts(contacts, filter)} />
      ) : (
        <p style={{ paddingLeft: '40px' }}>Please add at least 1 contact</p>
      )}
    </>
  );
};
