import React, {useState} from 'react';
import CartContext from './CartContext';

const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

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
      value={{
        onAddItem: addItemHandler,
        onDeleteItem: deleteItemHandler,
        cartItems: cartItems,
        totalAmount: totalAmount,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
