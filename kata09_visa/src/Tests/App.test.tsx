import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders cart title", () => {
  render(<App />);
  // Title above the cart
  const cartTitle = screen.getByText(/Your cart:/i);
  expect(cartTitle).toBeInTheDocument();
  // Total price label
  const totalPrice = screen.getByText(/Total Price/i);
  expect(totalPrice).toBeInTheDocument();
  // Clear cart button
  const clearButton = screen.getByText(/Clear Cart/i);
  expect(clearButton).toBeInTheDocument();
});
