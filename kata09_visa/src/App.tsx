import "./Styles/App.css";
import ItemListing from "./Components/Item/ItemListing";
import items from "./PriceData.json";
import { itemProperties } from "./Components/Item/ItemListing";
import Cart from "./Components/Cart/Cart";

function App() {
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
      <Cart />
    </div>
  );
}

export default App;
