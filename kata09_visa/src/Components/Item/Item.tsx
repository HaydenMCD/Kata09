import "./Item.css";
import ScanButton from "../ScanButton/ScanButton";

export interface itemProperties {
  ItemName: string;
  UnitCost: number;
  SpecialCount?: number;
  SpecialPrice?: number;
}

const Item = (props: itemProperties) => {
  return (
    <div className="itemContainer">
      <p>Item: {props.ItemName}</p>
      <p>Cost: {props.UnitCost}</p>
      <ScanButton />
    </div>
  );
};

export default Item;
