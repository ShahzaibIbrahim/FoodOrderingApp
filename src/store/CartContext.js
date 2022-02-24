import React from "react";

const CartContext = React.createContext({
  cartItems: [],
  totalAmount : 0, 
  onAddItem: (newItem) => {},
  onDeleteItem: (itemToDelete) => {},
});

export default CartContext;
