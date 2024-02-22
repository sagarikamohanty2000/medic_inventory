import React, { useContext } from "react";
import ReactDOM from "react-dom";
import Card from "../UI/Card";
import ContextApi from "../../Store/ContextApi";
import classes from "./CartCheckout.module.css";
import CartModalItem from "./CartModalItem";
const CartCheckout = (props) => {
  const contextApi = useContext(ContextApi);

  const totalAmt = contextApi.totalAmount.toFixed(2);

  const removeCartItem = (id) => {
    contextApi.removeItem(id);
  };

  const addCartItem = (item) => {
    if(item.qty > 1){
    contextApi.addItem({...item,amount: 1});
   
    console.log('cartItem',item);
    contextApi.removeQty(item.id);
    }
  };

  const cartItem = (
    <ul className={classes.itemDetails}>
      {contextApi.items.map((item) => (
        <CartModalItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={removeCartItem.bind(null, item.id)}
          onAdd={addCartItem.bind(null, item)}
        ></CartModalItem>
      ))}
    </ul>
  );

  const handleCloseBtn = () => {
    props.onShowCart(false);
  };
  const Backdrop = () => {
    return <div className={classes.backdrop}></div>;
  };

  const Layout = () => {
    return (
      <Card className={classes["cart-frame"]}>
        {cartItem}
        <span className={classes["content-body"]}>
          Total Amount <div className={classes.amount}>{totalAmt}</div>
        </span>
        <button
          type="button"
          className={classes.btnClose}
          onClick={handleCloseBtn}
        >
          Close
        </button>
        <button type="button" className={classes.btnOrder}>
          Order
        </button>
      </Card>
    );
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("cart-backdrop")
      )}
      {ReactDOM.createPortal(
        <Layout />,
        document.getElementById("cart-layout")
      )}
    </React.Fragment>
  );
};
export default CartCheckout;
