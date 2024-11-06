import { configureStore } from '@reduxjs/toolkit'
import catalogReducer from './features/catalogSlice'
import cartReducer from './features/cartSlice'
import filterReducer from './features/filterSlice'

export const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    cart: cartReducer,
    filter: filterReducer,
  },
})

// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']