import { createContext, useState } from "react";

const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const addToCart = (name, price) => {
    setCartProducts(state => [...state, { name, price }]);
  };
  const removeFromCart = (name, price) => {
    // setCartProducts(state => [...state, { name, price }]);
    console.log(name, price);
  };

  return (
    <CartContext.Provider value={{ addToCart, cartProducts, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
};

export default CartContext;