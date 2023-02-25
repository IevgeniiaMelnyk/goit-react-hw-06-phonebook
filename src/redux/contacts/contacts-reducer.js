import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact } from './contacts-actions';
import items from 'modules/items';

const initialStore = [...items];

const contactsReducer = createReducer(initialStore, {
  [addContact]: (store, { payload }) => [payload, ...store],
  [deleteContact]: (store, { payload }) =>
    store.filter(contact => contact.id !== payload),
});

export default contactsReducer;
