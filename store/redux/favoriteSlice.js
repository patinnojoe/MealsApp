import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      // we will have to set an id property in our payload
      state.ids.push(action.payload.id);
    },

    removeFavorite: (state, action) => {
      // in splice we specify the number of item we want, so we get the id and remove
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

// export the actions so that we can use it in dipatch method

export const favoriteAction = favoriteSlice.actions;

// export the reducer slice so we can ue it in the store
export default favoriteSlice.reducer;
