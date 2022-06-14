import "./App.scss";
import Button from "./components/Button/Button";
import { useState } from "react";
import ProfileCards from "./components/ProfileCards/ProfileCards";
const App = () => {
  const [users, setUsers] = useState();

  const getUsers = async () => {
    const url = "https://randomuser.me/api/?results=5";
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data.results);
  };
  console.log(users);
  return (
    <div className="app">
      <h1>Random User Generator</h1>
      <Button onClick={getUsers} label="Get users" />
      <ProfileCards users={users} />
    </div>
  );
};

export default App;
