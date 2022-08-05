import React, { useEffect, useState } from "react";
import { getAllPlanets } from "../component/api";
import { GiScoutShip } from "react-icons/gi";
import { Link } from "react-router-dom";


function Planet() {
  const [planet, setPlanet] = useState([]);
  useEffect(() => {
    const fn = async () => {
      const apiPlanet = await getAllPlanets();
      console.log(apiPlanet)
      return setPlanet(apiPlanet);
    };
    fn();
  }, []);

  return (
    <>
      <div style={{ display: "flex", overflowX: "scroll" }}>
        {planet.map((item, index) => (
          <div key={index}>
            <div
              className="card"
              style={{
                width: "18rem",
                display: "inline-block",
                margin: "10px",
                border:"1px solid white",
             
              }}
            >
              <img
                src="http://fakeimg.pl/400x200"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.url}</p>
                <Link
                  to={`/planets/${item.uid}`}
                  className="btn btn-outline-none"
                  style={{ backgroundColor: "red", outline: "none" }}
                >
                  Learn more
                </Link>
                <div
                  style={{
                    display: "inline-block",
                    marginLeft: "45%",
                    fontSize: "25px",
                  }}
                >
                  <GiScoutShip />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Planet;
