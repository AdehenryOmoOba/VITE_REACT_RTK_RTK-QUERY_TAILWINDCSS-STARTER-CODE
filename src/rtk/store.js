import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/theme/themeSlice";
import {reducer,reducerPath,middleware} from "../rtk-query/features/studentsSlice"
import modalReducer from "./features/modal/modalSlice"

export const store = configureStore({
    reducer: {
      themeReducer,
      modalReducer,
      [reducerPath] : reducer
    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(middleware) 
})

