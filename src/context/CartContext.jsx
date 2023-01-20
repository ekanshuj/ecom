import { createContext, useState } from "react";

const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const cartCount = cartProducts.reduce((acc, curr) => curr.count + acc, 0);

  const itemCount = (id) => {
    return cartProducts.find(items => items.id === id)?.count || 0;
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
    })
  };

  return (
    <CartContext.Provider value={{ addToCart, cartProducts, removeFromCart, cartCount, itemCount, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  )
};

export default CartContext;