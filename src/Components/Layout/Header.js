import React from "react";
import medicImg from "../../Assests/medicImg.jpg";
import HeaderCart from "./HeaderCart";
import classes from "./Header.module.css";

const Header = (props) => {
  const handleShowCart = () => {
    props.onShowCart(true)
}
  return (
    <React.Fragment>
      <div className={classes.header}>
        <h1>Medicine Inventory</h1>
        <HeaderCart onClickCart={handleShowCart}/>
      </div>
      <div className={classes['modal-img']}>
        <img src={medicImg} alt="Medicine Inventory"></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
