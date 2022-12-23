import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    slots :{
        bike : 20,
        car : 20
    },
    availableSlots : {
        bike : 20,
        car : 20
    },
    usersDetails : [],
    editDetails : {
        name : "",
        phoneNumber : 0,
        parkingType : ""
    }
}

export const usersSlice = createSlice ( {
    name : "usersDetails",
    initialState,
    reducers : {
        addUser : (state, action) => {
            state.usersDetails.push(action.payload);
        },
        changeParkingSlots : (state, action) => {
            state.slots.bike += Number(action.payload.bike)
            state.slots.car += Number(action.payload.car)
            state.availableSlots.bike += Number(action.payload.bike)
            state.availableSlots.car += Number(action.payload.car)
        },
        changeAvailableSlots : (state , action) => {
            state.availableSlots[action.payload] = state.availableSlots[action.payload] - 1;
        },

        needToChangeDetails : (state, action) => {
            state.editDetails = action.payload;
        },
        deleteSlot : (state, action) => {
            const userId = action.payload;
            state.usersDetails = state.usersDetails.filter((_user, index)  => index !== userId);
        }
    }
})

export const { addUser, changeParkingSlots , changeAvailableSlots, needToChangeDetails,deleteSlot} = usersSlice.actions;
export default usersSlice.reducer