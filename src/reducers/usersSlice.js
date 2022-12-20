import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    usersDetails : []
}

export const usersSlice = createSlice ( {
    name : "usersDetails",
    initialState,
    reducers : {
        addUser : (state, action) => {
            state.usersDetails.push(action.payload);
        }
    }
})

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer