import { useState } from "react";
import { Card } from "./components/Card/Card/Card";
import "./App.css";
import { ReactComponent as Bike } from "../src/assets/bike.svg";
import { ReactComponent as Car } from "../src/assets/car.svg";
import { Form } from "./components/Card/Form";
import { Users } from "./components/Card/Users";
import { Route, Routes } from "react-router-dom";

function App() {
  const [formPopUp, setFormPopUp] = useState(false);
  const [usersViewPopUp, setUsersViewPopUp] = useState(false);

  const userButtonHandler = () => {
    setFormPopUp(false);
    setUsersViewPopUp(true);
  };
  return (
    <div className={"app"}>
      <div className="cards_container">
        <Card Component={Bike} setFormPopUp={setFormPopUp} />
        <Card Component={Car} setFormPopUp={setFormPopUp} />
      </div>

      {formPopUp ? <Form setFormPopUp={setFormPopUp} /> : <></>}
      {usersViewPopUp ? (
        <Users setUsersViewPopUp={setUsersViewPopUp} />
      ) : (
        <> </>
      )}
      <div className="button_container">
        <button className="button" onClick={userButtonHandler}>
          User Details
        </button>
      </div>
    </div>
  );
}

export default App;
