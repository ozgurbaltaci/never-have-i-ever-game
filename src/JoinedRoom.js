import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AddQuestionInput from "./components/AddQuestionInput";
import BlobButton from "./components/BlobButton";

const JoinedRoom = () => {
  const location = useLocation(); // Access the room data passed via the navigation state
  const navigate = useNavigate();

  const [room_id] = useState(location.state.room_id); // Room ID from state
  const [room_name] = useState(location.state.room_name); // Room Name from state

  const startGameHandler = () => {
    console.log("Game started!");
    // Navigate to the /room/:roomId route with the roomId
    navigate(`/room/${room_id}`);
  };
  return (
    <div className="joined-room-screen">
      <h1 style={{ fontSize: "3rem" }}>
        Room {room_id}: {room_name}
      </h1>

      <AddQuestionInput room_id={room_id} />

      <div style={{ marginTop: "2rem" }}>
        <BlobButton
          buttonText={"Start Game"}
          onClick={startGameHandler}
        ></BlobButton>
      </div>
    </div>
  );
};

export default JoinedRoom;
