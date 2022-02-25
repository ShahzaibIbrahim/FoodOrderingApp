import React, { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
  cartItems: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {

    
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemsIndex = state.cartItems.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.cartItems[existingCartItemsIndex];
    
    let updatedItems;

    if(existingCartItem) {
      
    let updatedItem;

      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      };

      updatedItems = [...state.cartItems];
      updatedItems[existingCartItemsIndex] = updatedItem;
    } else {
      updatedItems = state.cartItems.concat(action.item);
    }

    return {
      cartItems: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }


  if(action.type === 'REMOVE_ITEM') {
    const existingCartItemsIndex = state.cartItems.findIndex(
      (item) => item.id === action.itemId
    );
    const existingCartItem = state.cartItems[existingCartItemsIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;

    let updatedItems; 

    if(existingCartItem.amount === 1) {
      updatedItems = state.cartItems.filter( item => item.id !== action.itemId);
    } else {
      const updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1}
      updatedItems = [...state.cartItems];
      updatedItems[existingCartItemsIndex] = updatedItem;
    }


    return {
      cartItems: updatedItems,
      totalAmount: updatedTotalAmount,
    }
  } 

  return defaultCartState;
};

const CartContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (newItem) => {
    console.log("New Item Added: " + newItem.name);

    dispatchCartAction({ type: "ADD_ITEM", item: newItem });
  };

  const deleteItemHandler = (itemId) => {
    console.log("Item to Delete: " + itemId);

    dispatchCartAction({ type: "REMOVE_ITEM", itemId: itemId });
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
