import React, { useState } from "react";
import Header from "./components/Layout/Header";

import Cart from "./components/Cart/Cart";
import Meals from "./components/Meals/Meals";

import CartContextProvider from "./store/CartContextProvider";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <CartContextProvider>
      {showCart && <Cart onHideCartHandler={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
