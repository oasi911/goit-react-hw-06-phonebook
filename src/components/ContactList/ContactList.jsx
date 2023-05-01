import PropTypes from 'prop-types';
import { ContactElement } from '../ContactElement/ContactElement';
import { ElementsList } from './ContactList.styled';
import { getFilteredContacts } from 'components/FilteredContacts';

export const ContactList = ({ filter, contacts, onClickDeleteBtn }) => {
  return (
    <ElementsList>
      {getFilteredContacts(contacts, filter).map(({ name, number, id }) => (
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
  filter: PropTypes.arrayOf(PropTypes.shape()),
  onClickDeleteBtn: PropTypes.func,
};
