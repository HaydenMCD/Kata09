const ClearCartButton = () => {
  function handleClick() {
    localStorage.removeItem("cart");
  }

  return (
    <div>
      <button onClick={handleClick}>Clear Cart</button>
    </div>
  );
};

export default ClearCartButton;
