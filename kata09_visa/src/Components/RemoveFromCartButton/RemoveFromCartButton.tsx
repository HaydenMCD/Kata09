import "../../Styles/RemoveFromCartButton.css";
import items from "../../PriceData.json";

interface RemoveButtonProps {
  id: number;
}

const RemoveFromCartButton = (props: RemoveButtonProps) => {
  const handleClick = () => {
    let currentCart = localStorage.getItem("cart");
    let selectedItem = items[props.id].ItemName;

    if (currentCart) {
      currentCart = JSON.parse(currentCart) as string;
      let newCart = currentCart.replace(selectedItem, "");
      localStorage.setItem("cart", JSON.stringify(newCart));
      window.location.reload();
    } else {
      return;
    }
  };

  return (
    <div className="removeButtonWrapper">
      <button className="removeButton" onClick={handleClick}>
        -
      </button>
    </div>
  );
};

export default RemoveFromCartButton;
