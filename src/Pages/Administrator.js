import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeParkingSlots } from "../reducers/usersSlice";
import { useNavigate } from "react-router-dom";

export const Administrator = () => {
  const userDetails = useSelector((state) => state.usersDetails.usersDetails);

  const dispatch = useDispatch();
  const navigate = useNavigate()

  console.log(userDetails);

  const [changeSlots, setChangeSlots] = useState({ bike: 0, car: 0 });
  const [parkingType, setParkingType] = useState("bike");
  return (
    <div>
      <div>
        <div>
          <label>Bike</label>
          <input
            type="radio"
            value="Bike"
            name="parkingType"
            onChange={() => setParkingType("bike")}
          />
        </div>
        <div>
          <label>Car</label>
          <input
            type="radio"
            value="Car"
            name="parkingType"
            onChange={() => setParkingType("car")}
          />
        </div>
      </div>
      <form
        onSubmit={(e) => (
          e.preventDefault(),
          dispatch(changeParkingSlots(changeSlots)),
          console.log(changeSlots),
          setParkingType({ bike: 0, car: 0 }),
          navigate("/")
        )}
      >
        <div>
          <label>Bike</label>
          <input
            type="number"
            value={changeSlots.bike}
            onChange={(e) =>
              setChangeSlots({ ...changeSlots, bike: e.target.value })
            }
          />
        </div>
        <div>
          <label>Car</label>
          <input
            type="number"
            value={changeSlots.car}
            onChange={(e) =>
              setChangeSlots({ ...changeSlots, car: e.target.value })
            }
          />
        </div>
        <div>
          <button>Save</button>
        </div>
      </form>

      <div>
        {userDetails?.map((user, index) => {
          return (
            parkingType === user.parkingType && (
              <div key={index}>
                <h3>{user.name}</h3>
                <h3>{user.phoneNumber}</h3>
                <button>Delete</button>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};
