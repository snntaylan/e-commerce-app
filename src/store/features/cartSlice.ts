import { createSlice } from '@reduxjs/toolkit'

export interface CartItem {
  productId: number,
  quantity: number,
}

interface CartState {
  selectedItems: CartItem[]
}

const initialState: CartState = {
  selectedItems: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setSelectedItems: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.selectedItems = action.payload;
    },
    addItemInCart: (state, action) => {
      state.selectedItems = [...state.selectedItems, { productId: action.payload.id, quantity: action.payload.quantity }]
    }
  },
})

// Action creators are generated for each case reducer function
export const { setSelectedItems, addItemInCart } = cartSlice.actions

export default cartSlice.reducer