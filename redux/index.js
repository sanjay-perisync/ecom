import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './slices/languageSlice';
import cartReducer from './slices/cartSlice';
import wishlistReducer from './slices/wishlistSlice';
import addressReducer from './slices/addressSlice';
import orderReducer from './slices/orderSlice';
import orderStatusReducer from './slices/orderStatusSlice'; 

import logger from 'redux-logger';

const middleware = [];
if (process.env.NEXT_PUBLIC_APP_CUSTOM_ENV !== "prod") {
  middleware.push(logger);
}

export const store = configureStore({
  reducer: {
    language: languageReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    address: addressReducer,
    order: orderReducer,
    orderStatus: orderStatusReducer, 
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleware),
});
