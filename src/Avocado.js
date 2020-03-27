import React from "react";
import "./Circle.css";
import avocado from "./images/avocado.png";
const Avocado = props => {
  return (
    <div
      className="Circle "
      onClick={props.clicked}
      style={{ backgroundImage: `url(${avocado})` }}
    ></div>
  );
};
export default Avocado;
