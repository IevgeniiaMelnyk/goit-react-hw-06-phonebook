import PropTypes from 'prop-types';
import { BtnSubmit } from './Button.styled.js';

const ButtonSubmit = ({ children, type, onSubmit }) => {
  return (
    <BtnSubmit onSubmit={onSubmit} type={type}>
      {children}
    </BtnSubmit>
  );
};

export default ButtonSubmit;

ButtonSubmit.propTypes = {
  children: PropTypes.elementType.isRequired,
  type: PropTypes.oneOf(['submit', 'button', 'reset']).isRequired,
  onSubmit: PropTypes.func,
};
