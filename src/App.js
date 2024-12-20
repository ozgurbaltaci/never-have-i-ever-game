import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CreateRoom from "./CreateRoom";
import HomePage from "./HomePage";
import JoinedRoom from "./JoinedRoom";
import Room from "./Room"; // Import the Room component
import Navbar from "./NavBar";

function App() {
  const [startGame, setStartGame] = useState(false);

  return (
    <Router>
      <Navbar></Navbar>

      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-room" element={<CreateRoom />} />
          <Route path="/join-room" element={<JoinedRoom />} />
          <Route path="/room/:roomId" element={<Room />} />{" "}
          {/* Add the route for the Room component */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
