import { createSlice } from "@reduxjs/toolkit";

const blueTheme = {textColor : "text-blue-300", bgColor: "bg-blue-700", homeBgColor: "bg-blue-200", logoColor: "text-blue-700"}
const redTheme = {textColor : "text-red-300", bgColor: "bg-red-700", homeBgColor: "bg-red-200", logoColor: "text-red-700"}
const greenTheme = {textColor : "text-green-300", bgColor: "bg-green-700", homeBgColor: "bg-green-200", logoColor: "text-green-700"}

const themeSlice = createSlice({
    name : "themes",
    initialState: blueTheme,
    reducers: {
        blue: () => {
          return blueTheme
        },
        red: () => {
          return redTheme
        },
        green: () => {
          return greenTheme
        },
    }
})

export default themeSlice.reducer
export const {blue,green,red} = themeSlice.actions