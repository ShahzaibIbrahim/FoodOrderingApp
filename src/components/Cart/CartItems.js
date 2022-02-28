import React, { useContext } from "react";

import CartItem from "./CartItem";
import CartContext from "../../store/CartContext";

const CartItems = (props) => {
    const cartContext = useContext(CartContext);

    const cartItemAddHander = (item) => {
        cartContext.onAddItem({...item, amount: 1})
      };
    
      const cartItemRemoveHander = (id) => {
        cartContext.onDeleteItem(id);
      };
    
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

      return (
          <React.Fragment>
              {cartitems}
          </React.Fragment>
      );
}

export default CartItems;