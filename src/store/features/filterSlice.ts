import { createSlice } from '@reduxjs/toolkit'

export interface FilterState {
  categoryId: number | null,
  minPrice: number,
  maxPrice: number,

}

const initialState: FilterState = {
  categoryId: null,
  minPrice: 0,
  maxPrice: 100,
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    setMinMaxPrice: (state, action) => {
      state.minPrice = action.payload?.minPrice;
      state.maxPrice = action.payload?.maxPrice;
    },
    setFilterState: (state, action) => {
      state.minPrice = action.payload?.minPrice;
      state.maxPrice = action.payload?.maxPrice;
      state.categoryId = action.payload?.categoryId;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCategoryId, setMinMaxPrice, setFilterState } = filterSlice.actions

export default filterSlice.reducer