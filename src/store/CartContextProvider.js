import React, { useState, useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
  cartItems: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
if(action.type === 'ADD_ITEM') {
    const updatedItems = state.cartItems.concat(action.item);
    const updatedTotalAmount =  state.totalAmount + (action.item.price * action.item.amount);

    return {
        cartItems : updatedItems,
        totalAmount : updatedTotalAmount
    };
}

  return defaultCartState;
};

const CartContextProvider = (props) => {

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemHandler = (newItem) => {
    console.log("New Item Added: " + newItem.name);

    dispatchCartAction({type: 'ADD_ITEM', item: newItem});
  };

  const deleteItemHandler = (itemToDelete) => {
    console.log("Item to Delete: " + itemToDelete);
  };

  return (
    <CartContext.Provider
      value={{
        onAddItem: addItemHandler,
        onDeleteItem: deleteItemHandler,
        cartItems: cartState.cartItems,
        totalAmount: cartState.totalAmount,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
