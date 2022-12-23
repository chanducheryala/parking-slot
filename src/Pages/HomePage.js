import { useState } from "react";
import { Card } from "../components/Card/Card/Card.js"
import "./HomePage.css";
import { ReactComponent as Bike } from "../assets/bike.svg";
import { ReactComponent as Car } from "../assets/car.svg";
import { Form } from "../components/Card/Form/index";
import { useNavigate } from "react-router-dom";



export const HomePage = () => {
  const navigate = useNavigate();
  const [formPopUp, setFormPopUp] = useState(false);

  const userButtonHandler = () => {
    setFormPopUp(false);

  };
  return (
    <div className={"app"}>
      <div className ="header">
          <h1>Parking Slots</h1>
      </div>
      <div className="cards_container">
        <Card Component={Bike} setFormPopUp={setFormPopUp} type={"bike"} />
        <Card Component={Car} setFormPopUp={setFormPopUp} type={"car"} />
      </div>

      {formPopUp ? <Form setFormPopUp={setFormPopUp} /> : <></>}
      <div className="button_container">
        <button className="button" onClick={() => navigate("/administrator")}>
          Administrator
        </button>
        <div>
          <button className="button" onClick={() => setFormPopUp(true)}>{"Book a slot"}</button>
        </div>
      </div>
    </div>
  );
}


