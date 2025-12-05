import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = {
        ...action.payload,
        cartItemId: `${Date.now()}-${Math.random()}`,
      };
      state.items.push(newItem);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.cartItemId !== action.payload
      );
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
