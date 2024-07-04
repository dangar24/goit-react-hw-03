import ContackList from "./ContackList/ContackList";
import SearchBox from "./SearchBox/SearchBox";
import ContackForm from "./components/ContackForm/ContackForm";
import { useState, useEffect } from "react";

function App() {

  const [contacts, setContacts] = useState(() => {
    const localData = localStorage.getItem('dataContacts')
    return localData ? JSON.parse(localStorage.getItem('dataContacts')) : [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]
  });
  const [filter, setFilter] = useState('');

  const filtredCont = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()));

  const addContact = (contact) => {
    setContacts((prevContact) => { return [...prevContact, contact]; })
  }

  const deleteContact = (contactId) => {
    setContacts(prevContact => {
      return prevContact.filter(contact => contact.id !== contactId)
    })
  }

  useEffect(() => {
    localStorage.setItem('dataContacts', JSON.stringify(contacts))
  },[contacts])

  return <div>
  <h1>Phonebook</h1>
    <ContackForm addContact={addContact} />
  <SearchBox value={filter} onFilter={setFilter} />
    <ContackList contacts={filtredCont} removeContact={deleteContact}/>
  </div>
}

export default App
