import React from "react";
import "./Circle.css";
import bg from "./images/bg.jpg";
const Guacamole = props => {
  if (props.isVisible) {
    return (
      <div className="Circle " style={{ backgroundImage: `url(${bg})` }}></div>
    );
  } else {
    return <div className="Circle"></div>;
  }
};
export default Guacamole;
