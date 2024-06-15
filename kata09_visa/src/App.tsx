import "./App.css";
import Item from "./Components/Item/Item";
import items from "./PriceData.json";
import { itemProperties } from "./Components/Item/Item";

function App() {
  return (
    <div className="App">
      <div>
        {items.map((i: itemProperties) => {
          return <Item ItemName={i.ItemName} UnitCost={i.UnitCost} />;
        })}
      </div>
    </div>
  );
}

export default App;
