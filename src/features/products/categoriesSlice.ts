import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoriesService from "./categoriesService";

interface CategoriesState {
    items: string[];
    isError: boolean;
    isSuccess: boolean;
    isLoading: boolean;
}

const initialState: CategoriesState = {
    items: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
};

export const getCategories = createAsyncThunk(
    "categories/getCategories",
    async (_, thunkAPI) => {
        try {
            return await categoriesService.getCategories();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        categoriesReset: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCategories.pending, (state: CategoriesState) => {
                state.isLoading = true;
            })
            .addCase(
                getCategories.fulfilled,
                (state: CategoriesState, action: PayloadAction<string[]>) => {
                    state.isLoading = false;
                    state.isSuccess = true;
                    state.items = action.payload;
                }
            )
            .addCase(getCategories.rejected, (state: CategoriesState) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

export const { categoriesReset } = categoriesSlice.actions;
export default categoriesSlice.reducer;
