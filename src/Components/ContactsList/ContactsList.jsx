import React from "react";
import PropTypes from "prop-types";
import { MyList } from "./ContactsList.styled";

const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <MyList>
      {contacts.map(({ name, number, id }) => (
        <li className="contact" key={id}>
          <p>
            {name}: {number}
          </p>
          <button
            className="buttonDelete"
            type="button"
            onClick={() => deleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </MyList>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
