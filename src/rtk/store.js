import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/theme/themeSlice";
import {reducer,reducerPath,middleware} from "../rtk-query/features/studentsSlice"
import modalReducer from "./features/modal/modalSlice"
import editStudentReducer from "./features/editStudent/editStudentSlice"

export const store = configureStore({
    reducer: {
      themeReducer,
      modalReducer,
      editStudentReducer,
      [reducerPath] : reducer
    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(middleware) 
})

