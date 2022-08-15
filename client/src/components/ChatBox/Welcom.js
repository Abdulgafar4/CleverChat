import React from "react";
import { useSelector } from "react-redux";
import Robot from "../../img/robot.gif";
import "./ChatBox.css";

const Welcom = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData);

  console.log({ user });
  return (
    <div className="welcomeContainer">
      <img src={Robot} alt="robot" />
      <h1>
        Welcome,<span> {user?.firstname}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </div>
  );
};

export default Welcom;
