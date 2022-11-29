import { createSlice } from "@reduxjs/toolkit";

const isOpen = false

const modalSlice = createSlice({
    name : "modal",
    initialState: isOpen,
    reducers: {
        openModal: () => {
          return true
        },
        closeModal: () => {
          return false
        },
    }
})

export default modalSlice.reducer
export const {openModal,closeModal} = modalSlice.actions