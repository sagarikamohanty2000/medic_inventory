import React from "react";
import medicImg from "../../Assests/medicImg.jpg";
import MedicForm from '../Medicine/MedicForm';
import classes from "./Header.module.css";

const Header = () => {
  return (
    <React.Fragment>
      <div className={classes.header}>
        <h1>Medicine Inventory</h1>
        <div className={classes["header-cart"]}>
          <button type="button">Cart</button>
        </div>
      </div>
      <div className={classes['modal-img']}>
        <img src={medicImg} alt="Medicine Inventory"></img>
      </div>
      <MedicForm></MedicForm>
    </React.Fragment>
  );
};

export default Header;
