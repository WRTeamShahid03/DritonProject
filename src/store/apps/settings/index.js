import { createSelector, createSlice } from '@reduxjs/toolkit'
import { store } from 'src/store';

// initial state
const initialState = {
    seller:false
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
        sellerSuccess: (state,action) => {
            state.seller = action.payload.data
        }
  },
})

export const { sellerSuccess } = settingsSlice.actions;

export default settingsSlice.reducer


export const loadSellerData = (data) =>{
    store.dispatch(sellerSuccess({data}))
}

export const settingsdata = createSelector(
    state => state.settings,
    settings => settings
)