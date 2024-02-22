import React, { useState, useEffect,useContext } from "react";
import Card from '../UI/Card';
import ContextApi from '../../Store/ContextApi';
import classes from './MedicForm.module.css';

const MedicForm = (props) => {
  const conextApi = useContext(ContextApi);
  const [medicName, setMedicName] = useState("");
  const [descrip, setDescrip] = useState("");
  const [price, setPrice] = useState("");
  const [qtyAvail, setQtyAvail] = useState("");

  const enterNameHandler = (event) => {
    setMedicName(event.target.value);
  };

  const enterDescripHandler = (event) => {
    setDescrip(event.target.value);
  };

  const enterPriceHandler = (event) => {
    setPrice(event.target.value);
  };

  const enterQtyHandler = (event) => {
    setQtyAvail(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const medicDetail = {
      id:Math.random(),
      name: medicName,
      des: descrip,
      price: price,
      qty: qtyAvail,
    };

    conextApi.addMedicItem(medicDetail);
    setMedicName("");
    setDescrip("");
    setPrice("");
    setQtyAvail("");
  };

  return (
    <Card className={classes.form}>
      <form onSubmit={onSubmitHandler}>
        <label>Medicine Name: </label>
        <input
          type="text"
          value={medicName}
          onChange={enterNameHandler}
        ></input>

        <label>Description: </label>
        <input
          type="text"
          value={descrip}
          onChange={enterDescripHandler}
        ></input>

        <label>Price: </label>
        <input type="number" value={price} onChange={enterPriceHandler}></input>

        <label>Quantity Available: </label>
        <input
          type="number"
          value={qtyAvail}
          onChange={enterQtyHandler}
        ></input>

        <button type="submit">Add to list</button>
      </form>
    </Card>
  );
};

export default MedicForm;
