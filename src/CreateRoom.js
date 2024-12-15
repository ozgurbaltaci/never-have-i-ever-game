import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BlobButton from "./components/BlobButton";
import AddQuestionInput from "./components/AddQuestionInput";

const CreateRoom = () => {
  const { state } = useLocation(); // Access state data passed via navigation
  const navigate = useNavigate();

  const room_name = state?.room_name || "No room name"; // Room name
  const room_id = state?.room_id || "Unknown"; // Room ID

  const startGameHandler = () => {
    console.log("Game started!");
    // Navigate to the /room/:roomId route with the roomId
    navigate(`/room/${room_id}`);
  };

  return (
    <div className="create-room-screen">
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

export default CreateRoom;
