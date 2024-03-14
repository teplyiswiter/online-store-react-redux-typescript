import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosConfig from "../../app/axiosConfig";
import { Product } from "../../types/product";
import productService from "./productService";

interface ProductState {
    products: Product[];
    product: Product;
    isError: boolean;
    isSuccess: boolean;
    isLoading: boolean;
}

const initialState: ProductState = {
    products: [],
    product: {
        category: "",
        description: "",
        id: 0,
        images: [],
        price: 0,
        title: "",
        stock: 0,
        brand: "",
        thumbnail: "",
    },
    isError: false,
    isSuccess: false,
    isLoading: false,
};

export const getProducts = createAsyncThunk(
    "products/getProducts",
    async (
        params: {
            page: number;
            size?: number;
        },
        thunkAPI
    ) => {
        try {
            return await productService.getProducts(params);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        productReset: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state: ProductState) => {
                state.isLoading = true;
            })
            .addCase(
                getProducts.fulfilled,
                (state: ProductState, action: PayloadAction<Product[]>) => {
                    state.isLoading = false;
                    state.isSuccess = true;
                    state.products = action.payload;
                }
            )
            .addCase(getProducts.rejected, (state: ProductState) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

export const { productReset } = productSlice.actions;
export default productSlice.reducer;
