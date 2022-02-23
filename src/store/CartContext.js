import React, { useState, useEffect } from "react";

const CartContext = React.createContext({
  cartItems: [],
  totalAmount : 0, 
  onAddItem: (newItem) => {},
  onDeleteItem: (itemToDelete) => {},
});

export const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState();
  const [totalAmount, setTotalAmount] = useState(0);

  /*  useEffect(() => {
        const isUserLoggedIn = localStorage.getItem('isLoggedIn');
        if(isUserLoggedIn === '1') {
          setIsLoggedIn(true);
        } 
      }, []); */

  const addItemHandler = (newItem) => {
    console.log("New Item Added: " + newItem);

    setCartItems((prevItems) => {
      return [newItem, ...prevItems];
    });
  };

  const deleteItemHandler = (itemToDelete) => {
    console.log("Item to Delete: " + itemToDelete);
  };

  return (
    <CartContext.Provider
      value={{ onAddItem: addItemHandler, onDeleteItem: deleteItemHandler, cartItems: cartItems, totalAmount: totalAmount}}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
