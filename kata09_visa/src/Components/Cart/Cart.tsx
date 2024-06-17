import React from "react";

const Cart = () => {
  let currentCart = localStorage.getItem("cart");
  if (currentCart == null) {
    currentCart = "Your cart is empty";
  } else {
    currentCart = JSON.parse(currentCart) as string;
  }

  return (
    <div>
      <pre> {currentCart} </pre>
    </div>
  );
};

export default Cart;
