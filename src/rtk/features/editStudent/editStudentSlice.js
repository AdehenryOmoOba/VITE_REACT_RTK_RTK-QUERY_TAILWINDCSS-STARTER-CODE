import { createSlice } from "@reduxjs/toolkit";

const studentDetails = {}

const modalSlice = createSlice({
    name : "editStudent",
    initialState: studentDetails,
    reducers: {
        setStudentDetails: (state,action) => {
          return action.payload
        },
        resetStudentDetails: () => {
          return studentDetails
        },
    }
})

export default modalSlice.reducer
export const {setStudentDetails,resetStudentDetails} = modalSlice.actions