import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/filter/filter-selectors';
import { setFilter } from '../../redux/filter/filter-slice';
import PropTypes from 'prop-types';
import { Input, Label } from './Filter.styled';

const Filter = ({ text }) => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const findByName = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  const onBlur = () => dispatch(setFilter(''));

  return (
    <>
      <Label>
        {text}
        <Input
          type="text"
          name="filter"
          placeholder="Name"
          value={filter}
          onChange={findByName}
          onBlur={onBlur}
        ></Input>
      </Label>
    </>
  );
};

export default Filter;

Filter.propTypes = {
  text: PropTypes.string.isRequired,
};
