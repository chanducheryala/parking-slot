import React, {useState} from 'react'
import styles from './styles.module.css';


export const Card = ( { Component, setFormPopUp } ) => {

    const [availableSlots, setAvailableSlots ] = useState(20);
    const slots = 20;
 
  return (
    <div className = {`${styles["card_container"]}`}>
         <div> 
            <Component  /> 
         </div>
         <div className={`${styles["details_container"]}`}>
          <div className={`${styles["details_block"]}`}>
               <h1>{slots}</h1>
          </div>
            <div className={`${styles["details_block"]}`}>
                <span>{availableSlots}</span>    
            </div>      
         </div>
         <div>
            <button className={`${styles["button"]}`} onClick = { () => setFormPopUp(true)}>{"Book a slot"}</button>
            </div>
    </div>
  )
}
