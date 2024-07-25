"use client";

import { useReducer, createContext } from "react";
import { cartReducer, cartInitialState } from "../reducers/Cart";

export const CartContext = createContext<any>(undefined);

function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);
  const addToCart = (product: any) =>
    dispatch({ type: "ADD_TO_CART", payload: product });

  const removeFromCart = (product: any) =>
    dispatch({ type: "REMOVE_FROM_CART", payload: product });

  return { state, addToCart, removeFromCart };
}

export function CartProvider({ children }: { children: any }) {
  const { state, addToCart, removeFromCart } = useCartReducer();

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
