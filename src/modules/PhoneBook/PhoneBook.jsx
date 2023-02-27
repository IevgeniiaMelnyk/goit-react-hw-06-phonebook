import { useSelector, useDispatch } from 'react-redux';
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { addContact } from 'redux/contacts/contacts-slice';
import { getFilterContacts } from 'redux/contacts/contacts-selectors';
import Section from 'shared/components/Section/Section';
import Filter from 'modules/Filter/Filter';
import ContactForm from 'modules/ContactForm/ContactForm';
import ContactList from 'modules/ContactList/ContactList';
import { Box, ManeBox } from './PhoneBook.staled';

const PhoneBook = () => {
  const contacts = useSelector(getFilterContacts);
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

  return (
    <ManeBox>
      <Section title="Phone Book">
        <ContactForm onSubmit={formSubmit} />
      </Section>
      <Section title="Contacts">
        <Box>
          <Filter text="Find contacts by name" />
          <ContactList />
        </Box>
      </Section>
    </ManeBox>
  );
};

export default PhoneBook;
