import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";


// const initialFavorites = getFavoritesFromLocalStorage() || [];

// const store = configureStore({
//   reducer: {
//     [apiSlice.reducerPath]: apiSlice.reducer,
//     auth: authReducer,
//     favorites: favoritesReducer,
//     cart: cartSliceReducer,
//     shop: shopReducer,
//   },

//   preloadedState: {
//     favorites: initialFavorites,
//   },

//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(apiSlice.middleware),
//   devTools: true,
// });

setupListeners(store.dispatch);
export default store;