import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Increment from "./Components/Increment";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<div>Hello</div>} />
          <Route path="/signup" element={<Increment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
