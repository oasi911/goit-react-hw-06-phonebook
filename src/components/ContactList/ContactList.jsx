import PropTypes from 'prop-types';
import { ContactElement } from '../ContactElement/ContactElement';
import { ElementsList } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';

export const ContactList = ({ onClickDeleteBtn }) => {
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
    <ElementsList>
      {getFilteredContacts().map(({ name, number, id }) => (
        <ContactElement
          name={name}
          number={number}
          key={id}
          id={id}
          onClickDeleteBtn={onClickDeleteBtn}
        />
      ))}
    </ElementsList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape()),
  onClickDeleteBtn: PropTypes.func,
};
