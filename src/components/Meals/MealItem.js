import React, {useContext} from "react";

import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";

import CartContext from "../../store/CartContext";

const MealItem = (props) => {
  const cartContext = useContext(CartContext);

  const addToCartHandler = amount => {

    const cartItem = {
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    }
    cartContext.onAddItem(cartItem);
  };


  return (
    <li className={classes.meal}>
      <div>
        <div>
          <h3>{props.name}</h3>
        </div>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
      <div>
          <MealItemForm onAddToCart={addToCartHandler} id={props.id}/>
        </div>
    </li>
  );
};

export default MealItem;
