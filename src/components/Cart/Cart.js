import classes from "./Cart.module.css";

import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartitems = (
    <ul>
      {[{ id: "c1", name: "sushi", price: 12.89 }].map((item) => 
        <li>{item.name}</li>
      )}
    </ul>
  );

  return (
    <Modal>
      {cartitems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>19.99</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes["button"]}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
