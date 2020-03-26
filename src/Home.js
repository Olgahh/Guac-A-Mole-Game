import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="header bg ">
      <div className="align-self-center text-center">
        <h1 className="display-3">
          <strong>
            <i>Guac-A-Mole</i>
          </strong>
        </h1>
        <br></br>
        <h3 className="display-5">Make the fastest and</h3>

        <h3 className="display-5 ">The most delicious guacamole! </h3>
        <Link to="/game">
          <button type="button" className="btn btn-success mt-3">
            Start Game!!!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
