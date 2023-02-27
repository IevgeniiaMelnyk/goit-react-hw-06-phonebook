import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-slice';
import { getFilterContacts } from 'redux/contacts/contacts-selectors';
import ContactItem from 'shared/components/ContactItem/ContactItem';
import { Item, List } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getFilterContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => {
    const action = deleteContact(id);
    dispatch(action);
  };

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
