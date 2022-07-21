import React, { useEffect, useState } from "react";
import { getAllShips } from "../component/api";
import { GiScoutShip } from "react-icons/gi";

function Vehicle() {
  const [vehicle, setShip] = useState([]);
  useEffect(() => {
    const fn = async () => {
      const apiShip = await getAllShips();
      return setShip(apiShip);
    };
    fn();
  }, []);

  return (
    <>
      <div style={{ display: "flex", overflowX: "scroll" }}>
        {vehicle.map((item, index) => (
          <div key={index}>
            <div
              key={index}
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
                <a href="#" className="btn btn-outline-none" style={{backgroundColor:"red", outline:"none"}}>
                  Learn more
                </a>
                <div style={{ display:"inline-block", marginLeft:"45%", fontSize:"25px"}}>
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

export default Vehicle;
