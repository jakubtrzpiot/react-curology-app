import { createSlice } from '@reduxjs/toolkit';

//ADD REDUX PERSIST
export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: {
    items: [],
    total: 0.0,
  },
  reducers: {
    add: (state, { payload: item }) => {
      const items = JSON.parse(JSON.stringify(state.items));
      const itemIndex = items.findIndex(obj => obj.name === item.name);
      !state.items[itemIndex]
        ? state.items.push(item)
        : (state.items[itemIndex].quantity += 1);
      state.total += item.price;
    },
    remove: (state, { payload: id }) => {
      state.total -= state.items[id].price * state.items[id].quantity;
      state.items.splice(id, id + 1);
    },
    increment: (state, { payload: id }) => {
      state.items[id].quantity += 1;
      state.total += state.items[id].price;
    },
    decrement: (state, { payload: id }) => {
      state.total -= state.items[id].price;
      state.items[id].quantity === 1
        ? state.items.splice(id, id + 1)
        : (state.items[id].quantity -= 1);
    },
    sumTotal: state => {
      state.total = 0;
      state.items.map(({ price, quantity }) => {
        state.total += price * quantity;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove, increment, decrement, sumTotal } =
  shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
