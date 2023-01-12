import { createContext, useState } from "react";

const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const cartInfo = (id, name, price) => {
    setCartProducts((prev) => [...prev, { id, name, price }]);
  }
  return (
    <CartContext.Provider value={{ cartInfo, cartProducts }}>
      {children}
    </CartContext.Provider>
  )
};

export default CartContext;