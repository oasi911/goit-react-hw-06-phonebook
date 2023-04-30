import PropTypes from 'prop-types';
import { List, DeleteBtn } from './ContactElement.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/slice';

export const ContactElement = ({ name, number, onClickDeleteBtn, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <List>
      <p>
        {name}: {number}
      </p>
      <DeleteBtn onClick={handleDelete}>Delete</DeleteBtn>
    </List>
  );
};

ContactElement.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  onClickDeleteBtn: PropTypes.func,
};
