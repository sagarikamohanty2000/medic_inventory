import React,{useContext} from 'react';
import MedicAddForm from './MedicAddForm';
import ContextApi from '../../Store/ContextApi';
import classes from './MedicDisplay.module.css';

const MedicDisplay = (props) => {

  const contextApi = useContext(ContextApi);

  const addToCart = (amt) => {
    const item = {
      id: props.details.id,
      name: props.details.name,
      price: props.details.price,
      amount: amt,
      qty:props.details.qty
    };
    contextApi.addItem(item);
    contextApi.removeQty(item.id);
  }
    return ( 
    <li className={classes["list-frame"]}>
    <div>
      <div className={classes["medic-name"]}>{props.details.name}</div>
      <div className={classes.des}>{props.details.des}</div>
      <div className={classes.price}>{` $ ${props.details.price}`}</div>
      <div className={classes.qty}>{props.details.qty}</div>
    </div>
    <div>
      <MedicAddForm getItemAmount={addToCart} />
    </div>
  </li>
    )
}

export default MedicDisplay;