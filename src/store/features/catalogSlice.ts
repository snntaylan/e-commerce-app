import { createSlice } from '@reduxjs/toolkit'

// export interface CatalogItem {
//   id: number,
//   title: string,
//   price: string,
//   category: string,
//   description: string,
//   image: string
// }

export interface CatalogCategory {
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
};

export interface CatalogItemType {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];  // Array of image URLs
  creationAt: string;
  updatedAt: string;
  category: CatalogCategory;
};

interface CatalogState {
  items: CatalogItemType[]
}

const initialState: CatalogState = {
  items: []
}

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setItems: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.items = [...action.payload];
    },
  },
})

// Action creators are generated for each case reducer function
export const { setItems } = catalogSlice.actions

export default catalogSlice.reducer