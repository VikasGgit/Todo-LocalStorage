import { configureStore } from "@reduxjs/toolkit"
import TodoSlice from "./TodoSlice"

export const Store= configureStore({
    reducer:TodoSlice
})