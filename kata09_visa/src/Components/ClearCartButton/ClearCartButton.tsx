import "../../Styles/ClearCartButton.css";

interface ClearCartButtonProps {
  onClearCart: () => void;
}

// Clears the cart and refreshes the page
const ClearCartButton = ({ onClearCart }: ClearCartButtonProps) => {
  const handleClearCart = () => {
    localStorage.removeItem("cart");
    onClearCart();
    window.location.reload();
  };

  return (
    <div>
      <button onClick={handleClearCart} className="clearCartButton">
        CHECKOUT
      </button>
    </div>
  );
};

export default ClearCartButton;
