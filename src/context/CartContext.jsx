import { createContext, useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useLocalStorage("cartItems", []);
  const [searchTerm, setSearchTerm] = useState("");

  const textVal = (val) => {
    setSearchTerm(val)
  };

  const cartCount = cartProducts?.reduce((acc, curr) => curr.count + acc, 0);

  const itemCount = (id) => {
    return cartProducts?.find(items => items.id === id)?.count || 0;
  };

  const addToCart = (id) => {
    setCartProducts(initialState => {
      if (initialState?.find(item => item.id === id) === undefined) return [...initialState, { id, count: 1 }];
      else {
        return initialState.map(item => {
          if (item.id === id) return { ...item, count: item.count + 1 };
          else {
            return item
          }
        })
      }
    });
  };

  const removeFromCart = (id) => {
    setCartProducts(initialState => {
      if (initialState.find(item => item.id === id)?.count === 1) return initialState.filter(item => item.id !== id);
      else {
        return initialState.map(item => {
          if (item.id === id) return { ...item, count: item.count - 1 };
          else {
            return item;
          }
        })
      }
    })
  };

  const deleteFromCart = (id) => {
    setCartProducts(initialState => {
      return initialState.filter(items => items.id !== id);
    });
    localStorage.removeItem("cartItems");
  };

  return (
    <CartContext.Provider value={{ addToCart, cartProducts, removeFromCart, cartCount, itemCount, deleteFromCart, textVal, searchTerm }}>
      {children}
    </CartContext.Provider>
  )
};

export default CartContext;