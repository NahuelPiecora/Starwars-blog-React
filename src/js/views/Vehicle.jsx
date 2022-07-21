import React, { useEffect, useState } from "react";
import { getAllShips } from "../component/api";

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
                <a href="#" className="btn btn-primary">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Vehicle;
