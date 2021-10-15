import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactsForm from "./ContactsForm/ContactsForm";
import Filter from "./Filter/Filter";
import ContactsList from "./ContactsList/ContactsList";

export default class App extends Component {
  state = {
    contacts: [
      { name: "Vlad", number: "+380666506650", id: "1" },
      { name: "Yans", number: "+380633590900", id: "2" },
      { name: "Bob", number: "+38050077789", id: "3" },
      { name: "CIA", number: "+16102347212", id: "4" },
    ],
    filter: "",
  };

  onHandleSubmitContact = ({ name, number }) => {
    const addContact = {
      id: uuidv4(),
      name,
      number,
    };

    this.state.contacts.some(
      (contact) => contact.name.toLowerCase() === addContact.name.toLowerCase()
    )
      ? alert(`${name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [addContact, ...contacts],
        }));
  };

  onDeleteContact = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((item) => item.id !== id),
    }));
  };

  changeFilterInput = (e) => {
    this.setState({ filter: e.target.value });
  };

  onFilteredContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
    );
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactsForm onHandleSubmit={this.onHandleSubmitContact} />

        <h2>Contacts</h2>
        <Filter value={filter} filtered={this.changeFilterInput} />
        <ContactsList
          deleteContact={this.onDeleteContact}
          contacts={this.onFilteredContacts()}
        />
      </div>
    );
  }
}
