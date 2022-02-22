import React from "react";
import Header from "./components/Layout/Header";

import Cart from "./components/Cart/Cart";
import Meals from './components/Meals/Meals';

function App() {
  return (
    <React.Fragment>
      <Cart></Cart>
      <Header />
      <main>
        <Meals/>
      </main>
      
    </React.Fragment>
  );
}

export default App;
