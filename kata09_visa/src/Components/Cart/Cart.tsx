import { useEffect, useState } from "react";
import itemsData from "../../PriceData.json";
import ClearCartButton from "../ClearCartButton/ClearCartButton";
import "../../Styles/Cart.css";

interface Item {
  ItemName: string;
  UnitCost: number;
  SpecialCount?: number;
  SpecialPrice?: number;
}

interface CartProps {
  cartCleared: boolean;
  onClearCart: () => void;
}

const initialItemCount: Map<string, number> = new Map(
  itemsData.map((item) => [item.ItemName, 0])
);

const Cart = ({ cartCleared, onClearCart }: CartProps) => {
  const [itemCount, setItemCount] =
    useState<Map<string, number>>(initialItemCount);

  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalAmountSaved, setTotalAmountSaved] = useState<number>(0);

  const countItems = (cart: string[]): Map<string, number> => {
    const countMap = new Map<string, number>(initialItemCount);
    for (const item of cart) {
      countMap.set(item, (countMap.get(item) || 0) + 1);
    }
    return countMap;
  };

  // Function to calculate total price based on item counts
  const calculateTotalPrice = (
    itemCount: Map<string, number>,
    itemsData: Item[]
  ): number => {
    let total = 0;
    itemCount.forEach((count, itemName) => {
      const item = itemsData.find((i) => i.ItemName === itemName);
      if (item) {
        // Testing if the item has a special
        if (item.SpecialCount && item.SpecialPrice) {
          // Rounds down to whole number to calculate how many specials
          const specialPriceCount =
            Math.floor(count / item.SpecialCount) * item.SpecialPrice;
          // Gives remainder that are not included in the special
          const regularPriceCount = (count % item.SpecialCount) * item.UnitCost;
          // Add together and update total
          total += specialPriceCount + regularPriceCount;
        } else {
          total += item.UnitCost * count;
        }
      }
    });
    return total;
  };

  const calculateAmountSaved = (
    itemCount: Map<string, number>,
    itemsData: Item[]
  ) => {
    let totalAmountSaved = 0;
    itemCount.forEach((count, itemName) => {
      const item = itemsData.find((i) => i.ItemName === itemName);
      if (item) {
        totalAmountSaved += item.UnitCost * count;
      }
    });
    return totalAmountSaved;
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const counts = countItems(storedCart);
    setItemCount(counts);

    const totalWithoutDiscount = calculateAmountSaved(counts, itemsData);
    setTotalAmountSaved(totalWithoutDiscount);

    const total = calculateTotalPrice(counts, itemsData);
    setTotalPrice(total);
  }, []);

  return (
    <div>
      <div className="cartWrapper">
        <ul>
          {Array.from(itemCount.entries()).map(([itemName, count]) => (
            <p key={itemName}>
              {itemName}: {count}
            </p>
          ))}
        </ul>

        <p className="totalLabel">Total Price: ${totalPrice}</p>

        <p className="savedLabel">
          Amount Saved: ${totalAmountSaved - totalPrice}
        </p>

        <ClearCartButton onClearCart={onClearCart} />
      </div>
    </div>
  );
};

export default Cart;
