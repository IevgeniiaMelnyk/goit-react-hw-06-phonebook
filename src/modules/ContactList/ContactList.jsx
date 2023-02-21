import PropTypes from 'prop-types';
import ContactItem from 'shared/components/ContactItem/ContactItem';
import { Item, List } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  const elements = contacts.map(({ id, name, number }) => {
    return (
      <Item key={id}>
        <ContactItem
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
          id={id}
        />
      </Item>
    );
  });

  return <List>{elements}</List>;
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

ContactList.defaultProps = {
  contacts: [],
};
