import React, { useEffect, useState, useContext } from "react";
import { getAllPeople } from "../component/api";
import { GiScoutShip } from "react-icons/gi";
import { Link } from "react-router-dom";
import { SinglePpl } from "../layout";
import { getPerson } from "../component/api";




function People() {
  const { singlePerson, setSinglePerson } = useContext(SinglePpl);
  const [person, setPerson] = useState([]);
  useEffect(() => {
    const fn = async () => {
      const apiPerson = await getAllPeople();
      console.log(apiPerson);

      return setPerson(apiPerson);
    };
    fn();
  }, []);

  const fetchOnePerson = (i) => {
    const fn = async () => {
      const apiPerson = await getPerson(i);

      return setSinglePerson(apiPerson);
    };
    fn();
    console.log(singlePerson);
  };
  return (
    <>
      <div style={{ display: "flex", overflowX: "scroll" }}>
        {person.map((item, index) =>( 
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
                onClick={() => fetchOnePerson(item.uid)}
                  to={`/people/${item.uid}`}
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

export default People;
