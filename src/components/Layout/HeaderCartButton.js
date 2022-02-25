import React, { useContext, useEffect, useState } from "react";

import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

import CartContext from "../../store/CartContext";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartContext = useContext(CartContext);

  const noOfCartItems = cartContext.cartItems.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const cartItems = cartContext.cartItems;

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  useEffect(() => {
      if(cartItems.length === 0 ) {
          return;
      }
      setBtnIsHighlighted(true);

      const timer = setTimeout(()=> {
        setBtnIsHighlighted(false);
      }, 300); 

      return () => {
          clearTimeout(timer);
      }
  }, [cartItems]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{noOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
