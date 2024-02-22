import React from "react";
import classes from "./CartModalItem.module.css";

const CartModalItem = (props) => {
  return (
    <React.Fragment>
      <div className={classes.rapper}>
      <div className={classes.body}>
        {" "}
        <div>
          <div className={classes.itemName}>{props.name}</div>
          <div className={classes.listDetails}>
          <div className={classes.price}>{`$${props.price}`}</div>
          <div className={classes.amount}>{`x${props.amount}`}</div>
          </div>
        </div>
        <div className={classes.btn}>
          <button type="button" className={classes.btnReduce} onClick={props.onRemove}>-</button>
          <button type="button" className={classes.btnAdd} onClick={props.onAdd}>+</button>
        </div>
      </div>
      </div>
    </React.Fragment>
  );
};

export default CartModalItem;
