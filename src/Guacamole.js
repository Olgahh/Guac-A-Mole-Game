import React from "react";
import "./Circle.css";
import bg from "./images/bg.jpg";

const Guacamole = props => {
  return (
    <div className="Circle " style={{ backgroundImage: `url(${bg})` }}></div>
  );
};
export default Guacamole;
