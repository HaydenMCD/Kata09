import ScanButton from "../ScanButton/ScanButton";
import "../../Styles/ItemListing.css";

export interface itemProperties {
  ItemName: string;
  UnitCost: number;
  SpecialCount: number;
  SpecialPrice: number;
}

interface ItemProps extends itemProperties {
  id: number;
}

const Item = (props: ItemProps) => {
  console.log(props);
  return (
    <>
      <div className="itemContainer">
        <p className="itemName">{props.ItemName}</p>
        <p className="itemCost">{props.UnitCost}</p>
        {props.SpecialCount > 0 && (
          <p className="itemSpecial">
            {props.SpecialCount} for {props.SpecialPrice}
          </p> 
        )}
        <div className="buttonWrapper">
          <ScanButton id={props.id} />
        </div>
      </div>
    </>
  );
};

export default Item;
