import items from "../../PriceData.json";

const Cart = () => {
  let currentCart = localStorage.getItem("cart");
  if (currentCart == null) {
    currentCart = "Your cart is empty";
  } else {
    currentCart = JSON.parse(currentCart) as string;
  }

  let result: { [key: string]: number } = {};

  currentCart.split("").forEach((char) => {
    result[char] = (result[char] || 0) + 1;
  });

  for (let i = 0; i < items.length; i++) {
    let tempItemName = items[i].ItemName;
    let tempItemNameString = result[tempItemName].toString();
    localStorage.setItem(tempItemName, tempItemNameString);
  }

  return (
    <div>
      <pre> {currentCart} </pre>
    </div>
  );
};

export default Cart;
