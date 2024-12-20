import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation
import AddQuestionInput from "./components/AddQuestionInput";
import BlobButton from "./components/BlobButton";

const JoinedRoom = () => {
  const location = useLocation(); // Access the room data passed via the navigation state
  const navigate = useNavigate();
  const { t } = useTranslation(); // Get the translation function

  const [room_id] = useState(location.state.room_id); // Room ID from state
  const [room_name] = useState(location.state.room_name); // Room Name from state
  const [questionsCount, setQuestionsCount] = useState(0);

  const startGameHandler = () => {
    console.log("Game started!");
    // Navigate to the /room/:roomId route with the roomId
    navigate(`/room/${room_id}`);
  };

  useEffect(() => {
    const fetchQuestionsCount = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/getQuestionsCount/${room_id}`
        );
        const data = await response.json();

        if (data.error) {
          alert(data.error);
        } else {
          setQuestionsCount(data.count || 0); // Assuming your API returns { count: number }
        }
      } catch (error) {
        console.error("Error fetching questions count:", error);
      }
    };

    fetchQuestionsCount(); // Corrected function call
  }, [room_id]); // Correct dependency

  return (
    <div className="joined-room-screen">
      <h1 style={{ fontSize: "3rem" }}>
        {t("room_title", { roomId: room_id, roomName: room_name })}{" "}
        {/* Translated room title */}
      </h1>

      <div style={{ fontSize: "16px" }}>
        {questionsCount > 0 ? (
          <p>
            {t("questions_in_room", { count: questionsCount })}{" "}
            {/* Translated message */}
          </p>
        ) : (
          <p>
            {t("no_questions_in_room")}{" "}
            {/* Translated message for no questions */}
          </p>
        )}
      </div>

      <div style={{ margin: "1.2rem 0rem" }}>
        <AddQuestionInput room_id={room_id} isExpandable={true} />
      </div>

      <div>
        <BlobButton
          buttonText={t("start_game")}
          onClick={startGameHandler}
          disabled={questionsCount === 0}
        ></BlobButton>
      </div>
    </div>
  );
};

export default JoinedRoom;
