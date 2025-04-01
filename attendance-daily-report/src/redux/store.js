import { configureStore } from '@reduxjs/toolkit';
import AttendanceSlice from './slice/AttendanceReducer'

export const store = configureStore({
    devTools:true,
    reducer:{
        attendance:AttendanceSlice
    }
})