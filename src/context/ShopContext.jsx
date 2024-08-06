import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  // const getDefaultCart = () => {
  //   let cart = {};
  //   for (let i = 1; i < data.length + 1; i++) {
  //     cart[i] = 0;
  //   }
  //   return cart;
  // };
  // const [cartItems, setCartItems] = useState(getDefaultCart());
  // const addToCart = (itemId) => {
  //   setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  // };
  // const removeFromCart = (itemId) => {
  //   setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  // };
  const createProduct = (newProduct) => {
    setData([...data, newProduct]);
  };
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products", {
        params: {
          limit: 8,
        },
      })
      .then((res) => {
        setData(res.data.products);
        localStorage.setItem("products", JSON.stringify(res.data.products));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //console.log(cartItems)
  console.log(data);
  return (
    <ShopContext.Provider value={{ data, createProduct }}>
      {children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
