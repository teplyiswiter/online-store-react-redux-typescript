import { createSlice } from "@reduxjs/toolkit";

type ModalState = {
    isShown: boolean;
};

const initialState: ModalState = {
    isShown: false,
};

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        showModal(state) {
            state.isShown = true;
        },
        hideModal(state) {
            state.isShown = false;
        },
    },
});

export const { showModal, hideModal } = modalSlice.actions;
export default modalSlice.reducer;
