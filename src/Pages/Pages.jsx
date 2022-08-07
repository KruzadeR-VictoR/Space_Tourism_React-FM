import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Destination from "./Destination";
import Crew from "./Crew";
import Technology from "./Technology";
import Error from "./Error";
import Planets from "../Components/Planets";
import json from "../data";

function Pages() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route
          path="/Destination"
          element={<Destination data={json.destinations} />}
        />
        <Route path="/Crew" element={<Crew data={json.crew} />} />
        <Route
          path="/Technology"
          element={<Technology data={json.technology} />}
        />
        <Route
          path="/Destination/:name"
          element={<Destination data={json.destinations} />}
        />
        <Route path="/Crew/:name" element={<Crew data={json.crew} />} />
        <Route
          path="/Technology/:name"
          element={<Technology data={json.technology} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default Pages;
