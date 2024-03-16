import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "../features/cart/cartSlice";
import productsSliceReducer from "../features/products/productsSlice";
import modalSliceReducer from "../features/modal/modalSlice";

export const store = configureStore({
    reducer: {
        cart: cartSliceReducer,
        products: productsSliceReducer,
        modal: modalSliceReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
