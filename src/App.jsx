import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesMap from "./routesMap/RoutesMap";

function App() {
  return (
    <div className="App">
      <Router>
        <RoutesMap />
      </Router>
    </div>
  );
}

export default App;
