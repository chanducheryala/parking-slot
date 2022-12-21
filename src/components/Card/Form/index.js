import React, {useState} from 'react'
import styles from './styles.module.css'
import {useDispatch} from 'react-redux'
import { addUser } from '../../../reducers/usersSlice'
import { ReactComponent as Close } from '../../../assets/close.svg'
import { changeAvailableSlots } from '../../../reducers/usersSlice'

export const Form = ({setFormPopUp}) => {
   const [user, setUser] = useState({ name : " ", phoneNumber : 0 , parkingType : ""})
   const dispatch = useDispatch();

    const changeHandler = (e) => {
        setUser({...user, [e.target.name] : e.target.value })
        
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(addUser(user));
        console.log(user);
        dispatch(changeAvailableSlots(user.parkingType));
        setUser({...user, name : " ", phoneNumber : 0 , parkingType : "bike" });
        setFormPopUp(false)
    }
  return (
    <div className={`${styles["form_container"]}`}>     
       <div style = {{position : "relative"}}>
        <div className={`${styles["cross"]}`} onClick = { () => setFormPopUp(false)}>
            <Close />
        </div>
       </div>
       <form onSubmit={submitHandler} className = {`${styles["form"]}`}>
         <div className={`${styles["input_container"]}`}>
            <label>Name</label>
            <input type = "text"  className = {`${styles["input_field"]}`} value = {user.name} name = "name"  onChange={changeHandler}/>
         </div>

         <div className={`${styles["input_container"]}`}>
            <label>Phone number</label>
            <input type="number" className = {`${styles["input_field"]}`}  value = {user.phoneNumber} name = "phoneNumber"  onChange={changeHandler}/>
         </div>
         <div className={`${styles['radio_container']}`}>
           <div>
              <label>Bike</label>
                <input type = "radio" value = "bike" name = "parkingType" onChange={changeHandler}/>
           </div>
           <div>
           <label>Car</label>
            <input type = "radio" value = "car" name = "parkingType" onChange={changeHandler} />
           </div>
         </div>
         <div>
            <button className={`${styles["button"]}`}>Save</button>
         </div>
        </form> 
    </div>
  )
}
