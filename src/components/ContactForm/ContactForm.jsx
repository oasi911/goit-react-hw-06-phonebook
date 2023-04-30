import {
  StyledForm,
  AddBtn,
  StyledLabel,
  StyledInput,
  Paragraph,
} from './ContactForm.styler';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/slice';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const { name, number } = e.target.elements;
    const contactName = name.value.trim();

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === contactName.toLowerCase()
      )
    ) {
      return alert(`${contactName} is already in contacts.`);
    }

    dispatch(addContact({ name: contactName, number: number.value.trim() }));
    e.target.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        <Paragraph>Name</Paragraph>
        <StyledInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </StyledLabel>
      <StyledLabel>
        <Paragraph>Number</Paragraph>
        <StyledInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </StyledLabel>
      <AddBtn>Add Contact</AddBtn>
    </StyledForm>
  );
};
