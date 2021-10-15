import React from "react";
import PropTypes from "prop-types";
import { MyLabel } from "./Filter.styled";
const Filter = ({ filtered, value }) => {
  return (
    <MyLabel>
      Find contacts by name
      <input type="text" name="filter" value={value} onChange={filtered} />
    </MyLabel>
  );
};

Filter.propTypes = {
  filtered: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;
