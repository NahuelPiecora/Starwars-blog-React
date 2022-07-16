import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home.js";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import People from "./views/People.jsx";
import Planet from "./views/Planet.jsx";
import Vehicle from "./views/Vehicle.jsx";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/people/:theid">
              <People />
            </Route>
            <Route exact path="/planet/:theid">
              <Planet />
            </Route>
            <Route exact path="/vehicle/:theid">
              <Vehicle />
            </Route>
          </Switch>
          <Route>
            <h1>Not found!</h1>
          </Route>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
