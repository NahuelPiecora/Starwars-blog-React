import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home.js";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import People from "./views/People.jsx";
import Planet from "./views/Planet.jsx";
import Vehicle from "./views/Vehicle.jsx";
import Individualperson from "./views/Individualperson.jsx";
import Individualplanet from "./views/Individualplanet.jsx";
export const SinglePlanet = React.createContext();
export const SinglePerson = React.createContext();
//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";
  const [single, setSingle] = useState([]);
  const info = { single, setSingle };
  const [singlePerson, setSinglePerson] = useState([]);
  const infoPerson = { singlePerson, setSinglePerson };
  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <SinglePlanet.Provider value={info}>
              <SinglePerson.Provider value={infoPerson}>
                <Route exact path="/">
                  <Home />
                </Route>

                <Route exact path="/planets/:theId">
                  <Individualplanet />
                </Route>
                <Route exact path="/people/:theId">
                  <Individualperson />
                </Route>
                <Route exact path="/vehicle">
                  <Vehicle />
                </Route>
              </SinglePerson.Provider>
            </SinglePlanet.Provider>
          </Switch>
          <Route></Route>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
