import { useState } from "react"
import React from 'react'
import { needToChangeDetails } from "../../../reducers/usersSlice";
import { useSelector, useDispatch } from "react-redux";


export const ViewSlot = ({viewSlotPopUp, setViewSlotPopUp}) => {
    const userDetails = useSelector(state => state.usersDetails.usersDetails);
     const  dispatch =  useDispatch();
    const [number, setNumber] = useState(0);
    const [user, setUser] = useState({name : "", phoneNumber : "", parkingType : ""})
    const submitHandler = (e) => {
        e.preventDefault();
        userDetails?.forEach((user) => {
            if(Number(user.phoneNumber) === Number(number))
             return (setViewSlotPopUp(true), setUser({name : user.name , phoneNumber : user.phoneNumber , parkingType : user.parkingType}))
        })


    }
  return (
    <div>
        <form onSubmit={submitHandler}>
        <input type = "number" value  = {number} onChange ={ (e) => setNumber(e.target.value)}/>
        <button>submit</button>
    </form>
    {viewSlotPopUp ? <div>
        <h5>{user.name}</h5>
        <h5>{user.phoneNumber}</h5>
        <h5>{user.parkingType}</h5>
        <button onClick={() => (dispatch(needToChangeDetails(user)), setUser({name : "", phoneNumber : "", parkingType : ""}))}>Edit</button>
    </div> : <></>}
    </div>
  )
}
