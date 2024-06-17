import React from "react";

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

  return (
    <div>
      <pre> {currentCart} </pre>
    </div>
  );
};

export default Cart;
