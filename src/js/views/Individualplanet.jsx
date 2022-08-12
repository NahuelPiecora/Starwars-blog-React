import React, { useContext, useEffect, useState } from "react";
import { getPlanet } from "../component/api";
// import { getAllPlanets } from "../store/flux";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { SinglePlanet } from "../layout";

// function Individualplanet() {
//   const { store, actions } = useContext(Context);
//   const params = useParams();
//   console.log("params", params);
//   console.log(store.planets);

//   const [item, setItem] = useState([]);
//   useEffect(() => {
//     actions.getAllPlanets();
//     setItem(store[params.planets][params.theId]);
//     console.log(params);
//   }, []);

export default function Individualplanet() {
  const { single, setSingle } = useContext(SinglePlanet);
  console.log(single);
  return (
    <>
      <div className="container text-center">
        <div>
          <div className="row">
            <div className="col">
              <img
                src="https://thecurbsiders.com/wp-content/uploads/2020/05/placeholder-800x600-1.png"
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="col" style={{ marginTop: "9%" }}>
              <h1></h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
                cupiditate necessitatibus eos similique accusantium eaque
                laboriosam officiis. Iure consectetur quas in expedita ex fuga
                dignissimos, incidunt voluptatibus quos dolor? Delectus! Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
                similique sit qui, dolore nam eos quia quae repellat inventore
                dolorem distinctio accusantium commodi voluptatem. Tempora
                commodi molestiae aut quia error.
              </p>
            </div>
          </div>
          <div className="container text-center">
            <div className="row">
              <div className="col">
                <h2>Name</h2>

                <span> {single.name} </span>
              </div>
              <div className="col">
                <h2>Diameter</h2>
                <span> {single.diameter} </span>
              </div>
              <div className="col">
                <h2>Climate</h2>
                {single.climate}
              </div>
              <div className="col">
                <h2>Population</h2>
                {single.population}
              </div>
              <div className="col">
                <h2>Terrain</h2>
                {single.terrain}
              </div>
              <div className="col">
                <h2>Gravity </h2>
                {single.gravity}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
