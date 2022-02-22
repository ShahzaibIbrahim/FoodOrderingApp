import classes from "./Cart.module.css";

import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartitems = (
    <ul>
      {[{ id: "c1", name: "sushi", price: 12.89 }].map((item) => 
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
