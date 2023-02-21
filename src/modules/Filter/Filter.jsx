import PropTypes from 'prop-types';
import { Input, Label } from './Filter.styled';

const Filter = ({ onBlur, onChange, value, text }) => {
  return (
    <>
      <Label>
        {text}
        <Input
          type="text"
          name="filter"
          placeholder="Name"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        ></Input>
      </Label>
    </>
  );
};

export default Filter;

Filter.propTypes = {
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
