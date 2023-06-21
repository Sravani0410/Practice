import { configureStore } from "@reduxjs/toolkit";
import todosSlice from './Slice'

export default configureStore({
    reducer:{
        post:todosSlice
    }
})