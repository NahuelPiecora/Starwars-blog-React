import React, { useContext, useEffect, useState } from "react";
import { getAllPeople } from "../component/api";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

function Individualperson() {
  const { store, actions } = useContext(Context);
  const params = useParams();
  console.log("params", params);
  console.log(store.people)

  const [item, setItem] = useState([]);
  useEffect(() => {
    
    actions.getAllPeople()
    setItem(store[params.type][params.theId]);
  }, []);
  
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
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque cupiditate necessitatibus eos similique accusantium
                  eaque laboriosam officiis. Iure consectetur quas in expedita
                  ex fuga dignissimos, incidunt voluptatibus quos dolor?
                  Delectus! Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Suscipit similique sit qui, dolore nam eos quia quae
                  repellat inventore dolorem distinctio accusantium commodi
                  voluptatem. Tempora commodi molestiae aut quia error.
                </p>
              </div>
            </div>
            <div className="container text-center">
              <div className="row">
                <div className="col">
                  <h2>{store[params.type][params.theId-1]?.name} </h2>{" "}
                </div>
                <div className="col">
                  <h2>{store[params.type][params.theId-1]?.birth_year}</h2>
                </div>
                <div className="col">
                  <h2>Height</h2>
                </div>
                <div className="col">
                  <h2>Hair Color</h2>
                </div>
                <div className="col">
                  <h2>Eye color</h2>
                </div>
                <div className="col">
                  <h2>Description </h2>
                </div>
              </div>
            </div>
          </div>
        
      </div>
    </>
  );
}
Individualperson.propTypes = {
  match: PropTypes.object,
};
export default Individualperson;
