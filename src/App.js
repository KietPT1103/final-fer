import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

import KietCV from "./pages/KietCV";
import Home from "./pages/Home";
import DucCV from "./pages/DucCV";

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kiet" element={<KietCV />} />
        <Route path="/duc" element={<DucCV />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
}

export default App;
