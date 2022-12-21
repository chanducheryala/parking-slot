import { useState } from "react";
import {Card} from "../components/Card/Card/Card.js"
import "./HomePage.css";
import { ReactComponent as Bike } from "../assets/bike.svg";
import { ReactComponent as Car } from "../assets/car.svg";
import { Form } from "../components/Card/Form/index";
import { Users } from "../components/Card/Users/index";
import { useNavigate } from "react-router-dom";
import { ViewSlot } from "../components/Card/ViewSlot/index.js";


export const HomePage = () => {
  const navigate = useNavigate();
  const [formPopUp, setFormPopUp] = useState(false);
  const [usersViewPopUp, setUsersViewPopUp] = useState(false);
  const [viewSlotPopUp, setViewSlotPopUp] = useState(false);

  const userButtonHandler = () => {
    setFormPopUp(false);
    setUsersViewPopUp(true);
  };
  return (
    <div className={"app"}>
      <ViewSlot />
      <button onClick={() => setViewSlotPopUp(true)}>View Slot</button>
      {viewSlotPopUp && <ViewSlot  viewSlotPopUp = {viewSlotPopUp} setViewSlotPopUp = {setViewSlotPopUp }/>}
      <div className="cards_container">
        <Card Component={Bike} setFormPopUp={setFormPopUp} type ={ "bike"} />
        <Card Component={Car} setFormPopUp={setFormPopUp}  type = {"car"}/>
      </div>

      {formPopUp ? <Form setFormPopUp={setFormPopUp} /> : <></>}
      {usersViewPopUp ? (
        <Users setUsersViewPopUp={setUsersViewPopUp} />
      ) : (
        <> </>
      )}
      <div className="button_container">
        <button className="button" onClick={() => navigate("/administrator")}>
          Administrator
        </button>
        <div>
            <button className="button" onClick = { () => setFormPopUp(true)}>{"Book a slot"}</button>
          </div>
      </div>
    </div>
  );
}


