import React, { useEffect, useState } from "react";
import itemsData from "../../PriceData.json";
import ClearCartButton from "../ClearCartButton/ClearCartButton";

interface Item {
  ItemName: string;
  UnitCost: number;
  SpecialCount?: number;
  SpecialPrice?: number;
}

const Cart = () => {
  const initialItemCount: Map<string, number> = new Map(
    itemsData.map((item) => [item.ItemName, 0])
  );
  const [itemCount, setItemCount] =
    useState<Map<string, number>>(initialItemCount);
  const [cart, setCart] = useState<string>(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : "";
  });
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const countItems = (cart: string): Map<string, number> => {
      const countMap = new Map<string, number>(initialItemCount);
      for (const item of cart) {
        countMap.set(item, (countMap.get(item) || 0) + 1);
      }
      return countMap;
    };

    const calculateTotalPrice = (
      itemCount: Map<string, number>,
      itemsData: Item[]
    ): number => {
      let total = 0;
      itemCount.forEach((count, itemName) => {
        const item = itemsData.find((i) => i.ItemName === itemName);
        if (item) {
          if (item.SpecialCount && item.SpecialPrice) {
            const specialPriceCount =
              Math.floor(count / item.SpecialCount) * item.SpecialPrice;
            const regularPriceCount =
              (count % item.SpecialCount) * item.UnitCost;
            total += specialPriceCount + regularPriceCount;
          } else {
            total += item.UnitCost * count;
          }
        }
      });
      return total;
    };

    const counts = countItems(cart);
    setItemCount(counts);
    const total = calculateTotalPrice(counts, itemsData);
    setTotalPrice(total);
  }, [cart, initialItemCount]);

  return (
    <div>
      <h3>Your cart:</h3>
      <ul>
        {Array.from(itemCount.entries()).map(([itemName, count]) => (
          <li key={itemName}>
            {itemName}: {count}
          </li>
        ))}
      </ul>
      <h3>Total Price: ${totalPrice}</h3>
      <ClearCartButton />
    </div>
  );
};

export default Cart;
