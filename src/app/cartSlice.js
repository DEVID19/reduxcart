import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItems = action.payload;
      const existingItem = state.cartItems.find(
        (items) => items.id === newItems.id
      );
      if (existingItem) {
        existingItem.quantity += newItems.quantity;
      } else {
        state.cartItems.push({ ...newItems, quantity: newItems.quantity });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (items) => items.id !== action.payload.id
      );
    },
    increaseQuantity: (state, action) => {
      const cartItems = state.cartItems.find(
        (items) => items.id === action.payload.id
      );
      if (cartItems) {
        cartItems.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const cartItems = state.cartItems.find(
        (items) => items.id === action.payload.id
      );
      if (cartItems.quantity > 1) {
        cartItems.quantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter(
          (items) => items.id !== cartItems.id
        );
      }
    },
    calculateTotal: (state) => {
      state.totalQuantity = state.cartItems.reduce(
        (total, items) => total + items.quantity,
        0
      );
      state.totalPrice = state.cartItems.reduce(
        (total, items) => total + items.price * items.quantity,
        0
      );
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  calculateTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
