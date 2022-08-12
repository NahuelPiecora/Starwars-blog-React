import React, { useEffect, useState, useContext } from "react";
import { getAllPlanets } from "../component/api";
import { GiScoutShip } from "react-icons/gi";
import { Link } from "react-router-dom";
import { getPlanet } from "../component/api";
import { SinglePlanet } from "../layout";


function Planet() {
  const { single, setSingle } = useContext(SinglePlanet);
  const [planet, setPlanet] = useState([]);
  useEffect(() => {
    const fn = async () => {
      const apiPlanet = await getAllPlanets();
      console.log(apiPlanet);

      return setPlanet(apiPlanet);
    };
    fn();
  }, []);

  const fetchOne = (i) => {
    const fn = async () => {
      const apiPlanet = await getPlanet(i);

      return setSingle(apiPlanet);
    };
    fn();
    console.log(single);
  };

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
                border: "1px solid white",
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
                  onClick={() => fetchOne(item.uid)}
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
