import React, { useContext } from "react";

import CartItems from "./CartItems";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";


import CartContext from "../../store/CartContext";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const hasItems = cartContext.cartItems.length > 0;

  const onCloseHandler = (event) => {
    event.preventDefault();
    props.onHideCartHandler();
  };

  return (
    <Modal onClose={onCloseHandler}>
      <CartItems />
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartContext.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={onCloseHandler} className={classes["button--alt"]}>
          Close
        </button>
        {hasItems && <button className={classes["button"]}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
