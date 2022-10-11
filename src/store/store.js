import { configureStore } from '@reduxjs/toolkit'
import { favoriteSlice } from './slices/favorites'

export const store = configureStore({
  reducer: {
    favorite: favoriteSlice.reducer,
  },
})
