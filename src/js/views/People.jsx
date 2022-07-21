import React, { useEffect, useState } from "react";
import { getAllPeople } from "../component/api";
import { GiScoutShip } from "react-icons/gi";

function People() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    const fn = async () => {
      const apiPeople = await getAllPeople();
      return setPeople(apiPeople);
    };
    fn();
  }, []);

  return (
    <>
      <div style={{ display: "flex", overflowX: "scroll" }}>
        {people.map((item, index) => (
          <div key={index}>
            <div
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

export default People;
