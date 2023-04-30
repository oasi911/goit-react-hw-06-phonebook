import { Label } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/slice';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Label>
      Find contacts by name
      <input type="text" onChange={handleChange} />
    </Label>
  );
};
