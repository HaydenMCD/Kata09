import React, { useEffect, useState } from "react";
import itemsData from "../../PriceData.json";

interface Item {
  ItemName: string;
  UnitCost: number;
  SpecialCount?: number;
  SpecialPrice?: number;
}

const Cart = () => {
  const [cart, setCart] = useState<string>(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : "";
  });
  const [itemCount, setItemCount] = useState<Map<string, number>>(new Map());
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const countItems = (cart: string): Map<string, number> => {
      const countMap = new Map<string, number>();
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
  }, [cart]);

  return (
    <div>
      <h3>Your cart:</h3>
      <ul>
        {Array.from(itemCount.entries()).map(([item, count]) => (
          <li key={item}>
            {item}: {count}
          </li>
        ))}
      </ul>
      <h3>Total Price: ${totalPrice}</h3>
    </div>
  );
};

export default Cart;
