import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/theme/themeSlice";
import {reducer,reducerPath,middleware} from "../rtk-query/features/studentsSlice"

export const store = configureStore({
    reducer: {
      themeReducer,
      [reducerPath] : reducer
    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(middleware) 
})

