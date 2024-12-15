import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AddQuestionInput from "./components/AddQuestionInput";

const JoinedRoom = () => {
  const location = useLocation(); // Access the room data passed via the navigation state
  const navigate = useNavigate();

  const [newQuestion, setNewQuestion] = useState(""); // State to hold the new question
  const [room_id] = useState(location.state.room_id); // Room ID from state
  const [room_name] = useState(location.state.room_name); // Room Name from state

  const addQuestionToDB = async () => {
    if (!newQuestion.trim()) {
      alert("Soru boş olamaz!");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8080/api/rooms/${room_id}/questions`, // Update URL to include roomId
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            question: newQuestion,
          }),
        }
      );

      if (response.ok) {
        alert("Soru başarıyla eklendi!");
        setNewQuestion(""); // Clear the input field after adding the question
      } else {
        alert("Soruyu eklerken bir hata oluştu!");
      }
    } catch (error) {
      console.error("Error adding question:", error);
      alert("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };

  return (
    <div className="joined-room-screen">
      <h1>Odaya Katıldınız!</h1>
      <p>
        <strong>Oda Adı:</strong> {room_name}
      </p>
      <p>
        <strong>Oda ID:</strong> {room_id}
      </p>

      <AddQuestionInput room_id={room_id} />
    </div>
  );
};

export default JoinedRoom;
