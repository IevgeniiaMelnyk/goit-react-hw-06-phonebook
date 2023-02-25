import { NotificationContainer } from 'react-notifications';
import PhoneBook from 'modules/PhoneBook/PhoneBook';

export const App = () => {
  return (
    <>
      <PhoneBook />
      <NotificationContainer />
    </>
  );
};
