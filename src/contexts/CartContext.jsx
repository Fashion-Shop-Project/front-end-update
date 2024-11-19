import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  cartItems: [],
  totalItems: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItemIndex = state.cartItems.findIndex(
        item => item.id === action.payload.id
      );
      
      if (existingItemIndex > -1) {
        const updatedItems = state.cartItems.map((item, index) => {
          if (index === existingItemIndex) {
            return {
              ...item,
              quantity: item.quantity + action.payload.quantity
            };
          }
          return item;
        });
        
        return {
          ...state,
          cartItems: updatedItems,
          totalItems: state.totalItems + action.payload.quantity
        };
      }
      
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        totalItems: state.totalItems + action.payload.quantity
      };
    case "REMOVE_FROM_CART":
      const updatedItems = state.cartItems.filter(
        item => item.id !== action.payload
      );
      const removedItem = state.cartItems.find(
        item => item.id === action.payload
      );
      
      return {
        ...state,
        cartItems: updatedItems,
        totalItems: state.totalItems - (removedItem ? removedItem.quantity : 0)
      };
    case "UPDATE_QUANTITY":
      const newItems = state.cartItems.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: action.payload.quantity
          };
        }
        return item;
      });
      
      const newTotalItems = newItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      
      return {
        ...state,
        cartItems: newItems,
        totalItems: newTotalItems
      };
    case "CLEAR_CART":
      return {
        ...state,
        cartItems: [],
        totalItems: 0
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
