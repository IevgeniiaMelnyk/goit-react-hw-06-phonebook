import { useSelector, useDispatch } from 'react-redux';
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { addContact, deleteContact } from 'redux/contacts/contacts-actions';
import { getFilterContacts } from 'redux/contacts/contacts-selectors';
import { setFilter } from 'redux/filter/filter-actions';
import { getFilter } from 'redux/filter/filter-selectors';
import Section from 'shared/components/Section/Section';
import Filter from 'modules/Filter/Filter';
import ContactForm from 'modules/ContactForm/ContactForm';
import ContactList from 'modules/ContactList/ContactList';
import { Box, ManeBox } from './PhoneBook.staled';

const PhoneBook = () => {
  const contacts = useSelector(getFilterContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const formSubmit = ({ name, number }) => {
    if (
      contacts.find(
        contact => name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      NotificationManager.info(`${name} is already in contacts.`);
      return;
    }

    const action = addContact({ name, number });
    dispatch(action);
  };

  const onDeleteContact = id => {
    const action = deleteContact(id);
    dispatch(action);
  };

  const findByName = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  const onBlur = () => dispatch(setFilter(''));

  return (
    <ManeBox>
      <Section title="Phone Book">
        <ContactForm onSubmit={formSubmit} />
      </Section>
      <Section title="Contacts">
        <Box>
          <Filter
            onBlur={onBlur}
            onChange={findByName}
            value={filter}
            text="Find contacts by name"
          />
          <ContactList contacts={contacts} onDeleteContact={onDeleteContact} />
        </Box>
      </Section>
    </ManeBox>
  );
};

export default PhoneBook;
