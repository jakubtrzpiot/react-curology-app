import { configureStore } from '@reduxjs/toolkit';
import shoppingCartReducer from './shoppingCartSlice.js';

export default configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
  },
});
