import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import People from "./People.jsx";
import Planet from "./Planet.jsx";
import Vehicle from "./Vehicle.jsx";

export const Home = () => (
  <div className=".container">
    <h1>Characters</h1>
    <People />

    <h1>Planets</h1>
    <Planet />

    <h1>Starships</h1>
    <Vehicle />
  </div>
);
