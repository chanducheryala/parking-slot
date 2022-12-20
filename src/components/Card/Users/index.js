import React, { useState } from 'react'
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { ReactComponent as Close } from '../../../assets/close.svg'

export const Users = ({setUsersViewPopUp}) => {
    const [parkingType, setParkingType ] = useState("Bike");
    const users = useSelector(state => state.usersDetails.usersDetails);

    const changeHandler = (e) => {
        setParkingType(e.target.value);
    }
  return (
    <div  className = {`${styles["users_container"]}`}>
       <div>
        <h1>The Users</h1>
       </div>
       <div style = {{position : "relative"}}>
        <div className={`${styles["cross"]}`} onClick = { () => setUsersViewPopUp(false)}>
            <Close />
        </div>
       </div>
       <div className={`${styles['radio_container']}`}>
           <div>
              <label>Bike</label>
                <input type = "radio" value = "Bike" name = "parkingType" onChange={changeHandler}/>
           </div>
           <div>
           <label>Car</label>
            <input type = "radio" value = "Car" name = "parkingType" onChange={changeHandler} />
           </div>
         </div>
         <div>
         {
               users && users.map((user, index) => {
                   return <div>
                      <h3>{user.name}</h3>
                      <h3>{user.phoneNumber}</h3>
                      <button>Delete</button>
                   </div>
               })
            }
         </div>
    </div>
  )
}
