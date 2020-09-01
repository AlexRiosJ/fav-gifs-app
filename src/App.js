import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "bootswatch/dist/materia/bootstrap.min.css";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import GiphyState from "./context/giphy/GiphyState";
import Home from "./components/pages/Home";
import Favorites from "./components/pages/Favorites";
import NotFound from "./components/pages/NotFound";

const App = () => {
  return (
    <GiphyState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/favorites" component={Favorites} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </GiphyState>
  );
};

export default App;
