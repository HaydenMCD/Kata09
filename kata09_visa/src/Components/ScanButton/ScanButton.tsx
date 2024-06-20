import "../../Styles/ScanButton.css";
import items from "../../PriceData.json";

interface ScanButtonProps {
  id: number;
}

const ScanButton = (props: ScanButtonProps) => {
  const handleClick = () => {
    let currentCart = localStorage.getItem("cart");
    let selectedItem = items[props.id].ItemName;

    if (currentCart == null) {
      // If the cart is empty the item is added
      localStorage.setItem("cart", JSON.stringify(selectedItem));
    } else {
      // If the cart has items the new item is appended to the end of the current cart
      currentCart = JSON.parse(currentCart) as string;
      let newCart = currentCart.concat(selectedItem);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };

  return (
    <div className="scanButtonContainer">
      <button className="scanButton" onClick={handleClick}>
        Scan
      </button>
    </div>
  );
};

export default ScanButton;
