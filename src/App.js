import React, { useState, useContext } from "react";
import Header from "./Components/Layout/Header";
import MedicForm from "./Components/Medicine/MedicForm";
import CartCheckout from "./Components/Cart/CartCheckout";
import MedicList from "./Components/Medicine/MedicList";
import ContextProvide from "./Store/ContextProvider";
import MedicListContext from "./Store/MedicListContext";
import "./App.css";

function App() {
  const [medicineList, setMedicineList] = useState([]);
  const [cartHandler, setCartHandler] = useState(false);

  const medicDetailHandler = (medicine) => {
    setMedicineList((prevMedicList) => {
      return [...prevMedicList, medicine];
    });
  };

  const showCartHandler = (showCart) => {
    setCartHandler(showCart);
  };

  const hideCartHandler = (showCart) => {
    setCartHandler(showCart);
  };
  return (
    <ContextProvide>
      <div className="App">
        {cartHandler && <CartCheckout onShowCart={hideCartHandler} />}
        <header className="App-header">
          <Header onShowCart={showCartHandler} />
          <MedicForm getMedicDetail={medicDetailHandler}></MedicForm>
        </header>
        <main>
          <MedicList medicList={medicineList} />
        </main>
      </div>
    </ContextProvide>
  );
}

export default App;
