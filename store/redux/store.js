import { configureStore } from '@reduxjs/toolkit';
import favoriteSlice from './favoriteSlice';
const store = configureStore({
  reducer: {
    favoriteReducer: favoriteSlice,
  },
});

export default store;
