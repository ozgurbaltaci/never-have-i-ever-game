import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BlobButton from "./components/BlobButton";

const CreateRoom = () => {
  const [newQuestion, setNewQuestion] = useState("");
  const [questionsInRoom, setQuestionsInRoom] = useState([]);
  const navigate = useNavigate();

  const addQuestion = () => {
    if (newQuestion.trim()) {
      setQuestionsInRoom([...questionsInRoom, { question: newQuestion }]);
      setNewQuestion(""); // Clear input after adding a question
    }
  };

  const startGameHandler = () => {
    console.log("Game started!");
    navigate("/");
  };

  return (
    <div className="create-room-screen">
      <h1>Room Created!</h1>
      <p>Oda numarası: {Math.floor(Math.random() * 10000)}</p>
      <div className="add-question">
        <input
          type="text"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          placeholder="Yeni soru ekleyin"
        />
        <button onClick={addQuestion}>Add Question</button>
      </div>
      <div>
        <h2>Questions in the room:</h2>
        <ul>
          {questionsInRoom.map((q, index) => (
            <li key={index}>{q.question}</li>
          ))}
        </ul>
      </div>
      <div>
        <button onClick={startGameHandler}>Oyun Başlat</button>
      </div>
    </div>
  );
};

export default CreateRoom;
