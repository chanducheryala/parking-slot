import React from 'react'
import styles from './styles.module.css';
import {  useSelector } from 'react-redux';
// import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export const Card = ( { Component , type } ) => {
  const availableSlots = useSelector(state => state.usersDetails.availableSlots);
  const totalSlots = useSelector(state => state.usersDetails.slots )
   return (
    <div className = {`${styles["card_container"]}`}>
         <div> 
            <Component  /> 
         </div>
         <div className={`${styles["details_container"]}`}>
          <div className={`${styles["details_block"]}`}>
              <h6>{"Total Slots"}</h6>
               <h2>{totalSlots[type]}</h2>
          </div>
            <div className={`${styles["details_block"]}`}>
            <h6>{"Available Slots"}</h6>
                <span>{availableSlots[type]}</span>    
            </div>      
         </div>
       
    </div>
  )
}
