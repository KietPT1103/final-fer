import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

import PhucCV from './pages/PhucCV';
import KietCV from "./pages/KietCV";
import Home from "./pages/Home";
import DucCV from "./pages/DucCV";
import TienCV from "./pages/TienCV";
import SangCV from "./pages/SangCV";
function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kiet" element={<KietCV />} />
        <Route path="/phuc" element={<PhucCV />} />
        <Route path="/duc" element={<DucCV />} />
        <Route path="/tien" element={<TienCV />} />
        <Route path="/sang" element={<SangCV />} />
      </Routes>
    </div>
  );
}

export default App;
