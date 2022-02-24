import React, { useContext } from "react";

import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

import CartContext from "../../store/CartContext";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const hasItems = cartContext.cartItems.length > 0;

  const cartItemAddHander = (item) => {};

  const cartItemRemoveHander = (id) => {};

  const cartitems = (
    <ul>
      {cartContext.cartItems.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHander.bind(null, item.id)}
          onAdd={cartItemAddHander.bind(null, item)}
        />
      ))}
    </ul>
  );

  const onCloseHandler = (event) => {
    event.preventDefault();
    props.onHideCartHandler();
  };

  return (
    <Modal onClose={onCloseHandler}>
      {cartitems}
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
