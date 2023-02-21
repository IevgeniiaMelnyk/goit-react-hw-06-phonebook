import PropTypes from 'prop-types';
import ButtonClick from '../Buttons/ButtonClick';
import { Name, Number } from './ContactItem.styled';
import { ImUserMinus } from 'react-icons/im';
import { IconContext } from 'react-icons';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <>
      <div>
        <Name>{name}</Name>
        <Number>{number}</Number>
      </div>
      <div>
        <ButtonClick type="button" onClick={() => onDeleteContact(id)}>
          <IconContext.Provider value={{ color: '#fff', size: '20px' }}>
            <ImUserMinus />
          </IconContext.Provider>
        </ButtonClick>
      </div>
    </>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
