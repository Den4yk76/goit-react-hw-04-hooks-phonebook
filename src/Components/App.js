import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from './Form/Form';
import ContactsList from './ConatctsList/ConatctsList';
import './styles.css';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (userName, userNumber) => {
    const contactsArr = [];

    contacts.forEach(el => {
      contactsArr.push(el.name, el.number);
    });

    if (contactsArr.includes(userNumber || userName.toLowerCase())) {
      return alert('This person or number is already in contacts');
    } else {
      setContacts(prevState => [
        ...prevState,
        { id: uuidv4(), name: userName, number: userNumber },
      ]);
    }
  };

  const findContact = name => {
    setFilter(name);
  };

  const deleteContact = e => {
    setContacts(prevState => prevState.filter(el => el.id !== e.target.id));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Form addContact={addContact} />
      <h2>Contacts</h2>
      <ContactsList
        filter={filter}
        contacts={contacts}
        findContact={findContact}
        deleteContact={deleteContact}
      />
    </div>
  );
}
