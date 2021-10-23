import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactsForm from "./ContactsForm/ContactsForm";
import Filter from "./Filter/Filter";
import ContactsList from "./ContactsList/ContactsList";
import data from "./data";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem("contacts")) ?? data;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const submitContact = ({ name, number }) => {
    const addContact = {
      id: uuidv4(),
      name,
      number,
    };

    contacts.find(
      (contact) => contact.name.toLowerCase() === addContact.name.toLowerCase()
    )
      ? alert(`${name} is already in contacts`)
      : setContacts((prevContacts) => [addContact, ...prevContacts]);
  };

  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  const changeFilterInput = (e) => {
    setFilter(e.target.value);
  };

  const onFilteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactsForm onHandleSubmit={submitContact} />

      <h2>Contacts</h2>
      <Filter value={filter} filtered={changeFilterInput} />
      <ContactsList
        deleteContact={deleteContact}
        contacts={onFilteredContacts()}
      />
    </div>
  );
}
