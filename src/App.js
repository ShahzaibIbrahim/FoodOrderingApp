import React, { useState} from "react";
import Header from "./components/Layout/Header";

import Cart from "./components/Cart/Cart";
import Meals from './components/Meals/Meals';

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  }
  
  const hideCartHandler = () => {
    setShowCart(false);
  }

  return (
    <React.Fragment>
      {showCart && <Cart onHideCartHandler={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
      
    </React.Fragment>
  );
}

export default App;
