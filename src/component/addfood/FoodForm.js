import React from "react";
import PropTypes from "prop-types";
import "./foodform.scss";

const FoodForm = () => {
  const [formValues, setFormValues] = React.useState({
    type: "",
  });
  const handleTypeChange = (e) => {
    console.log(e.target.value);
    setFormValues({ [e.target.name]: e.target.value });
  };
  return (
    <>
      <select name="type" value={formValues.type} onChange={handleTypeChange}>
        <option value="one">One</option>
      </select>
    </>
  );
};

FoodForm.proptypes = {
  id: PropTypes.number,
};

export default FoodForm;
