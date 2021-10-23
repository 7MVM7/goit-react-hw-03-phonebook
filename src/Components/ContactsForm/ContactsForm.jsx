import React, { useState } from "react";
import PropTypes from "prop-types";
import { MyForm } from "./ContactsForm.styled";

export default function ContactsForm({ onHandleSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const change = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const submit = (e) => {
    e.preventDefault();
    onHandleSubmit({ name, number });
    reset();
  };
  const reset = () => {
    setName("");
    setNumber("");
  };
  return (
    <MyForm onSubmit={submit}>
      <label>
        Name
        <input
          onChange={change}
          type="text"
          name="name"
          value={name}
          placeholder="Enter your name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        Number
      </label>
      <input
        onChange={change}
        placeholder="Enter your phone number"
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
      />
      <button type="submit">Add contact</button>
    </MyForm>
  );
}

ContactsForm.propTypes = {
  onHandleSubmit: PropTypes.func.isRequired,
};
