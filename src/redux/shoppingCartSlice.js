import { createSlice } from '@reduxjs/toolkit';

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: {
    items: [
      { name: 'Item1', price: 10.99, quantity: 1 },
      { name: 'Item2', price: 12.99, quantity: 1 },
    ],
    total: 0,
  },
  reducers: {
    add: (state, action) => {},
    remove: (state, { payload: id }) => {
      state.items.splice(id, id + 1);
    },
    increment: (state, { payload: id }) => {
      state.items[id].quantity += 1;
    },
    decrement: (state, { payload: id }) => {
      state.items[id].quantity === 1 ?  state.items.splice(id, id + 1) : (state.items[id].quantity -= 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove, increment, decrement } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
