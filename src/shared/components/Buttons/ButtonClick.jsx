import PropTypes from 'prop-types';
import { DeleteBtn } from './Button.styled.js';

const ButtonClick = ({ children, type, onClick }) => {
  return (
    <DeleteBtn onClick={onClick} type={type}>
      {children}
    </DeleteBtn>
  );
};

export default ButtonClick;

ButtonClick.propTypes = {
  children: PropTypes.element.isRequired,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  onClick: PropTypes.func,
};

ButtonClick.defaultProps = {
  type: 'button',
};
