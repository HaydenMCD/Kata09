import ScanButton from "../ScanButton/ScanButton";
import "../../Styles/ItemListing.css";

export interface itemProperties {
  ItemName: string;
  UnitCost?: number;
  SpecialCount?: number;
  SpecialPrice?: number;
}

interface ItemProps extends itemProperties {
  id: number;
}

const Item = (props: ItemProps) => {
  return (
    <div className="itemContainer">
      <p>Item: {props.ItemName}</p>
      <p>Cost: {props.UnitCost}</p>
      <ScanButton id={props.id} />
    </div>
  );
};

export default Item;
