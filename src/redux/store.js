import { configureStore } from '@reduxjs/toolkit';
import shoppingCartReducer from './shoppingCartSlice.js';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// export default configureStore({
//   reducer: {
//     shoppingCart: shoppingCartReducer,
//   },
// });

const persistConfig = {
  key: 'cart',
  storage,
};

const persistedReducer = persistReducer(persistConfig, shoppingCartReducer);

let store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
let persistor = persistStore(store);

export { store, persistor };
