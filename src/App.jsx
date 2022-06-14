import { useState, useEffect } from "react";
import "./App.scss";
import CardContainer from "./components/CardContainer/CardContainer";
import RangeInput from "./components/RangeInput/RangeInput";
import RadioButtons from "./components/RadioButtons/RadioButtons";

const App = () => {
  const [users, setUsers] = useState([]);
  const [numberOfUsers, setNumberOfUsers] = useState(7);
  const [genderOfUser, setGenderOfUser] = useState("all");

  const getUsers = async (userNumber, userGender) => {
    let url = "https://randomuser.me/api";
    if (userNumber) {
      url += `?results=${userNumber}`;
    }
    if (userGender !== "all") {
      url += `&gender=${userGender}`;
    }
    const res = await fetch(url);
    const data = await res.json();
    setUsers(data.results);
  };

  //USE EFFECT
  // FUNCTION -> THE CODE YOU WANT TO RUN
  //AN ARRAY -> DEPENDANCY -> WHEN YOU WANT TO RUN FUNCTION ABOUVE
  useEffect(() => {
    getUsers(numberOfUsers, genderOfUser);
  }, [numberOfUsers, genderOfUser]);

  const handleInputChange = (event) => {
    setNumberOfUsers(event.target.value);
  };

  const onChangeRadio = (event) => {
    setGenderOfUser(event.target.value);
  };

  return (
    <div className="app">
      <h1>Random User Generator</h1>
      <RangeInput
        id="user-range"
        label={`Number of users: ${numberOfUsers}`}
        min={1}
        max={10}
        value={numberOfUsers}
        onChange={handleInputChange}
      />
      <RadioButtons
        label="Gender"
        options={["all", "female", "male"]}
        selected={genderOfUser}
        onChange={onChangeRadio}
      />

      <CardContainer cards={users} />
    </div>
  );
};

export default App;
