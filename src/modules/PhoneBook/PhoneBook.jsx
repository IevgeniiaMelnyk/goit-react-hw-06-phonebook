import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Section from 'shared/components/Section/Section';
import Filter from 'modules/Filter/Filter';
import ContactForm from 'modules/ContactForm/ContactForm';
import ContactList from 'modules/ContactList/ContactList';
import { Box, ManeBox } from './PhoneBook.staled';
import items from 'modules/items';

const PhoneBook = () => {
  const [contacts, setContacts] = useState(() => {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    return contacts ? contacts : [...items];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmit = ({ name, number }) => {
    if (
      contacts.find(
        contact => name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }

    setContacts(prevContacts => {
      const contact = {
        id: nanoid(),
        name,
        number,
      };
      return [contact, ...prevContacts];
    });
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const findByName = e => {
    setFilter(e.currentTarget.value);
  };

  const showFilterContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const onBlur = () => setFilter('');

  const visibleContacts = showFilterContacts();

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
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={deleteContact}
          />
        </Box>
      </Section>
    </ManeBox>
  );
};

export default PhoneBook;
