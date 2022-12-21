import React from 'react'
import styles from './styles.module.css';
import {  useSelector } from 'react-redux';
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
               <h1>{totalSlots[type]}</h1>
          </div>
            <div className={`${styles["details_block"]}`}>
                <span>{availableSlots[type]}</span>    
            </div>      
         </div>
       
    </div>
  )
}
