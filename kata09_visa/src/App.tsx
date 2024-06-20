import React, { useState } from "react";
import "./Styles/App.css";
import ItemListing from "./Components/Item/ItemListing";
import items from "./PriceData.json";
import { itemProperties } from "./Components/Item/ItemListing";
import Cart from "./Components/Cart/Cart";

function App() {
  const [cartCleared, setCartCleared] = useState(false);

  const handleClearCart = () => {
    localStorage.removeItem("cart");
    setCartCleared(true);
  };

  return (
    <div className="App">
      <div>
        {items.map((i: itemProperties, index: number) => {
          return (
            <ItemListing
              key={index}
              id={index}
              ItemName={i.ItemName}
              UnitCost={i.UnitCost}
            />
          );
        })}
      </div>
      <Cart cartCleared={cartCleared} onClearCart={handleClearCart} />
    </div>
  );
}

export default App;
