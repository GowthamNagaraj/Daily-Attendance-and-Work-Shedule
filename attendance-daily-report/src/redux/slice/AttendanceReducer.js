import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const AttendanceSlice = createSlice({
    name: "attendance",
    initialState,
    reducers: {
        addAttendance(state,action){
            state.push(action.payload)
        }
    }
})

export const { addAttendance } = AttendanceSlice.actions;
export default AttendanceSlice.reducer;