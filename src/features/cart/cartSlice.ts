import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
    id: string;
    title: string;
    price: number;
    quantity: number;
};

type CartState = {
    items: CartItem[];
};

const initialState: CartState = {
    items: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(
            state,
            action: PayloadAction<{ id: string; title: string; price: number }>
        ) {
            const existingItemIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );
            if (existingItemIndex >= 0) {
                state.items[existingItemIndex].quantity++;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart(state, action: PayloadAction<{ id: string }>) {
            const existingItemIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );
            if (state.items[existingItemIndex].quantity === 1) {
                state.items.splice(existingItemIndex);
            } else {
                state.items[existingItemIndex].quantity--;
            }
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
