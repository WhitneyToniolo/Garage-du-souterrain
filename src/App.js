import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
// import Accueil from "./Accueil";
// import Services from "./Services";
// import Apropos from "./Apropos";
// import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        {/* <Switch>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/apropos">
            <Apropos />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Accueil />
          </Route>
        </Switch> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
