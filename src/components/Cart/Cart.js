import React, {useContext} from "react";

import CartContext from "../../store/CartContext";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal";


const Cart = (props) => {

  const cartContext = useContext(CartContext);
  
  const cartitems = (
    <ul>
      {cartContext.cartItems.map((item) => 
        <li key={item.id}>{item.name}</li>
      )}
    </ul>
  );

  const onCloseHandler = (event) => {
    event.preventDefault();
    props.onHideCartHandler();
  }

  

  return (
    <Modal onClose={onCloseHandler}>
      {cartitems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>19.99</span>
      </div>
      <div className={classes.actions}>
        <button onClick={onCloseHandler} className={classes["button--alt"]}>Close</button>
        <button className={classes["button"]}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
