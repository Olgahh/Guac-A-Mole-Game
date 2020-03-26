import React from "react";
import { Link } from "react-router-dom";
const Result = props => {
  return (
    <div className="header bgcolor">
      <div className="jumbotron">
        <h1 className="display-4" style={{ color: "#6CC72A" }}>
          Holy Guacamole!
        </h1>
        <p className="lead"> Your score is {props.score}!!!</p>
        <hr className="my-4"></hr>
        <p>Bravocado!</p>
        <Link to="/game">
          <button
            type="button"
            className="btn  mt-3"
            style={{ backgroundColor: "#FFC513" }}
          >
            Play Again?
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Result;
