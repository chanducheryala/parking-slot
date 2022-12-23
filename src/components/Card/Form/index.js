import React, {useState} from 'react'
import styles from './styles.module.css'
import {useDispatch} from 'react-redux'
import { addUser } from '../../../reducers/usersSlice'
import { ReactComponent as Close } from '../../../assets/close.svg'
import { changeAvailableSlots } from '../../../reducers/usersSlice'

export const Form = ({setFormPopUp}) => {
   const [user, setUser] = useState({ name : " ", phoneNumber : 0 , parkingType : ""})
   const [Finaluser, setFinalUser] = useState({ name : " ", phoneNumber : 0 , parkingType : ""})
   const [edit, setEdit] = useState(false);
   const dispatch = useDispatch();

    const changeHandler = (e) => {
        setUser({...user, [e.target.name] : e.target.value })
        
    }

    const saveHandler = () => {
       setEdit(true);
       setFinalUser({name : user.name, phoneNumber : user.phoneNumber , parkingType : user.parkingType})
       setUser({name : " " , phoneNumber :0 , parkingType : " "})
    }

    const editHandler = () => {
      setUser({user, name : Finaluser.name , phoneNumber : Finaluser.phoneNumber , parkingType : Finaluser.parkingType})
    } 

    const submitHandler = () => {
        dispatch(addUser(Finaluser));
        console.log(Finaluser);
        dispatch(changeAvailableSlots(Finaluser.parkingType));
        setUser({...user, name : " ", phoneNumber : 0 , parkingType : " " });
        setFinalUser({...user, name : " ", phoneNumber : 0 , parkingType : " " });
        setFormPopUp(false)
    }
  return (
    <div className={`${styles["form_container"]}`}>     
       <div style = {{position : "relative"}}>
        <div className={`${styles["cross"]}`} onClick = { () => setFormPopUp(false)}>
            <Close />
        </div>
       </div>
       <div  className = {`${styles["form"]}`}>
         <div className={`${styles["input_container"]}`}>
            <label className={`${styles["label"]}`}>Name</label>
            <input type = "text"  className = {`${styles["input_field"]}`}  value = {user.name} name = "name"  onChange={changeHandler}/>
         </div>

         <div className={`${styles["input_container"]}`}>
            <label className={`${styles["label"]}`}>Phone Number</label>
            <input type="number" className = {`${styles["input_field"]}`}  value = {user.phoneNumber} name = "phoneNumber"  onChange={changeHandler}/>
         </div>
         <div className={`${styles['radio_container']}`}>
           <div className={`${styles['radio_button']}`}>
              <label >Bike</label>
               <input type = "radio" value = "bike" name = "parkingType" onChange={changeHandler} />
           </div>
           <div className={`${styles['radio_button']}`}>
           <label>Car</label>
            <input type = "radio" value = "car" name = "parkingType" onChange={changeHandler}  />
           </div>
         </div>
        { edit && <div className={`${styles['edit_container']}`}>
            <span>{Finaluser.name}</span>
            <span>{Finaluser.phoneNumber}</span>
            <span>{Finaluser.parkingType}</span>
            <button onClick={editHandler} className={`${styles["button"]}`}>Edit</button>
            <button onClick={submitHandler} className={`${styles["button"]}`}>Submit</button>
         </div>}
         <div>
            <button onClick={saveHandler} className={`${styles["button"]}`}>Save</button>
         </div>
        </div> 
    </div>
  )
}
