import { NotificationContainer } from 'react-notifications';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/store.js';
import PhoneBook from 'modules/PhoneBook/PhoneBook';

export const App = () => {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <PhoneBook />
      <NotificationContainer />
    </PersistGate>
  );
};
