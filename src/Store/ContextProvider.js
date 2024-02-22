import React, { useReducer } from "react";
import CartContext from "./ContextApi";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const defaultMedicState = {
  items: [],
};

const medicReducer = (state, action) => {
  if (action.type === "ADD") {
    console.log("Inside Add ContextProvider Medic", action.item);
    const updatedItems = state.items.concat(action.item);

    return { items: updatedItems };
  }

  if (action.type === "REMOVE") {
    const getItemIndex = state.items.findIndex((item) => item.id === action.id);
    const getItem = state.items[getItemIndex];
    let updatedItems = [...state.items];
    if (getItem.amount == 1) {
      const updateItem = { ...getItem, qty: 0 };
      updatedItems[getItemIndex] = updateItem;
    } else {
      const updateItem = { ...getItem, qty: getItem.qty - 1 };
      updatedItems[getItemIndex] = updateItem;
    }
    return { items: updatedItems };
  }

  return defaultCartState;
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const totalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const getItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const getItem = state.items[getItemIndex];
    let updatedItems = [...state.items];

    if (getItem) {
      const updatedExistingItem = {
        ...getItem,
        amount: Number(getItem.amount) + Number(action.item.amount),
        qty: Number(getItem.qty) - Number(action.item.amount),
      };

      updatedItems[getItemIndex] = updatedExistingItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return { items: updatedItems, totalAmount: totalAmount };
  }
  return defaultCartState;
};

const ContextProvide = (props) => {
  const [cartState, dispatchCartItem] = useReducer(
    cartReducer,
    defaultCartState
  );
  const [medicState, dispatchMedicItem] = useReducer(
    medicReducer,
    defaultMedicState
  );

  const addItemToCart = (item) => {
    dispatchCartItem({ type: "ADD", item: item});
  };

  const removeItemFromCart = (id) => {
    dispatchCartItem({ type: "REMOVE", id: id});
  };

  const addItemToMedicList = (item) => {
    dispatchMedicItem({ type: "ADD", item: item });
  };

  const removeQuantity = (id) => {
    dispatchMedicItem({ type: "REMOVE", id:id });
  };
  const cartContext = {
    medicItems: medicState.items,
    addMedicItem: addItemToMedicList,
    removeQty: removeQuantity,
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvide;
