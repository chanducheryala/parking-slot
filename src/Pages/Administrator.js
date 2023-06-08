import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeParkingSlots } from "../reducers/usersSlice";
import { useNavigate } from "react-router-dom";
import "./Administrator.css";
import { deleteSlot } from "../reducers/usersSlice";

export const Administrator = () => {
  const userDetails = useSelector((state) => state.usersDetails.usersDetails);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(userDetails);

  const [changeSlots, setChangeSlots] = useState({ bike: 0, car: 0 });
  const [parkingType, setParkingType] = useState("bike");
  return (
    <div className="admin_container">
      <div className="adminlabel">
        <h1>Administrator Page</h1>
      </div>
      <div className="btn-radio">
        <div className="r-btn">
          <label>Bike</label>
          <input
            type="radio"
            value="Bike"
            name="parkingType"
            onChange={() => setParkingType("bike")}
          />
        </div>
        <div className="r-btn">
          <label>Car</label>
          <input
            type="radio"
            value="Car"
            name="parkingType"
            onChange={() => setParkingType("car")}
          />
        </div>
      </div>
      <div className="form">
        <div className="input">
          <label>Bike</label>
          <input
            type="number"
            value={changeSlots.bike}
            onChange={(e) =>
              setChangeSlots({ ...changeSlots, bike: e.target.value })
            }
          />
        </div>
        <div className="input">
          <label>Car</label>
          <input
            type="number"
            value={changeSlots.car}
            onChange={(e) =>
              setChangeSlots({ ...changeSlots, car: e.target.value })
            }
          />
        </div>
        <div className="input">
          <button
            class="btn btn-primary"
            onClick={() => (
              dispatch(changeParkingSlots(changeSlots)),
              setParkingType({ bike: 0, car: 0 }),
              navigate("/")
            )}
          >
            Save
          </button>
        </div>
      </div>

      <div className="details">
        {userDetails?.map((user, index) => {
          return (
            parkingType === user.parkingType && (
              <div key={index} className="table">
                <h5>{user.name}</h5>
                <h5>{user.phoneNumber}</h5>
                <button className="btn btn-danger" onClick = { () =>  dispatch(deleteSlot(index) )}>Delete</button>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};
