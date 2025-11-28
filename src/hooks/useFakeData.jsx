import { useEffect, useState } from "react";

export const fakeProducts = [
  { id: 101, name: "Laptop Pro", price: 2999 },
  { id: 102, name: "Kablosuz Mouse", price: 29 },
  { id: 103, name: "Mekanik Klavye", price: 149 },
  { id: 104, name: "4K Monitor", price: 599 },
  { id: 105, name: "USB-C Hub", price: 49 },
];

export function useFakeData(fakeList, delay = 500) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(fakeList);
    }, delay);

    return () => clearTimeout(timer);
  }, [fakeList, delay]);

  return data;
}
export default useFakeData;