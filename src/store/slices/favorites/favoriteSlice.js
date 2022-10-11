import { createSlice } from '@reduxjs/toolkit'

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState : {
    favorites: [],
    images:[],
  }
  ,
  reducers: {
    fav: (state, data) => {
      state.favorites =[...state.favorites, data.payload]
    },
    unfav:(state, data) =>{
      state.favorites = state.favorites.filter(e => {
        return e !== data.payload
      })
    },
    favUrl: (state, data) => {
      state.images =[...state.images, data.payload]
    },
    unfavUrl:(state, data) =>{
      state.images = state.images.filter(e => {
        return e !== data.payload
      })
    },
  },
})

export const { fav, unfav, favUrl, unfavUrl } = favoriteSlice.actions

