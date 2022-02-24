import React, {useContext} from 'react';

import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';

import CartContext from '../../store/CartContext';

const HeaderCartButton = (props) => {
     const cartContext = useContext(CartContext);

    const noOfCartItems = cartContext.cartItems.reduce((curNumber, item) => {
        return curNumber + item.amount;
    } , 0);  

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{noOfCartItems}</span>
        </button>
    );
}


export default HeaderCartButton;