import React from "react";
import BlobButton from "./components/BlobButton";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const handleCreateRoomClick = () => {
    navigate("/create-room");
  };

  return (
    <div className="start-screen">
      <h1 className="title">Never Have I Ever</h1>
      <p className="description">
        Hazır mısınız? Bu oyun, hiç yapmadığınız şeyleri keşfetmeniz için
        eğlenceli bir fırsat sunuyor! Şimdi, arkadaşlarınızla veya kendinizle ne
        kadar dürüstsünüz?
      </p>
      <div style={{ display: "flex", gap: "15px" }}>
        <BlobButton
          className="start-button"
          buttonText={"Create a room"}
          onClick={handleCreateRoomClick}
        />
        <BlobButton className="start-button" buttonText={"Join a room"} />
      </div>
    </div>
  );
};

export default HomePage;
