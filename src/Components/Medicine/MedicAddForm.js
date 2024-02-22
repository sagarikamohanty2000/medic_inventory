import React, { useRef } from "react";
import classes from "./MedicAddForm.module.css";

const MedicAddForm = (props) => {

  const submitFormHandler = (event) => {
    event.preventDefault();
    props.getItemAmount(1);
  };

  return (
    <form onSubmit={submitFormHandler}>
       <button type="submit" id={classes.AddBtn} disabled = {props.disable}>
          + Add
        </button>
    </form>
  );
};

export default MedicAddForm;
