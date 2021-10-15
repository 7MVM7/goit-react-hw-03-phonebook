import React, { Component } from "react";
import PropTypes from "prop-types";
import { MyForm } from "./ContactsForm.styled";

export default class ContactsForm extends Component {
  state = {
    name: "",
    number: "",
  };
  change = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  submit = (e) => {
    e.preventDefault();
    this.props.onHandleSubmit(this.state);
    this.reset();
  };

  render() {
    const { name, number } = this.state;
    return (
      <MyForm onSubmit={this.submit}>
        <label>
          Name
          <input
            onChange={this.change}
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

        <label>
          <input
            onChange={this.change}
            placeholder="Enter your phone number"
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </MyForm>
    );
  }
}

ContactsForm.propTypes = {
  onHandleSubmit: PropTypes.func.isRequired,
};
