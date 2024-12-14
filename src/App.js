import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateRoom from "./CreateRoom";
import HomePage from "./HomePage";

function App() {
  const [startGame, setStartGame] = useState(false);

  return (
    <Router>
      {" "}
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/create-room" element={<CreateRoom />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
