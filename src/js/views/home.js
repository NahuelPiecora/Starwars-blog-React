import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import People from "./People.jsx";
import Planet from "./Planet.jsx";
import Vehicle from "./Vehicle.jsx";

export const Home = () => (
  <div className=".container" style={{backgroundImage: `url("https://images.unsplash.com/photo-1541280910158-c4e14f9c94a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMHNwYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80")`,backgroundAttachment:"fixed", paddingTop:"7%"}}>
    <h1>Characters</h1>
    <People />

    <h1>Planets</h1>
    <Planet />

    <h1>Starships</h1>
    <Vehicle />
  </div>
);
