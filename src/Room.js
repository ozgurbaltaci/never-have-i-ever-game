import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Room.css";

const Room = () => {
  const { roomId } = useParams(); // Get the roomId from the URL
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // Fetch questions from the database when the component mounts
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/rooms/${roomId}/questions`
        );
        const data = await response.json();

        if (data.error) {
          alert(data.error);
        } else {
          // Shuffle the questions randomly
          const shuffledQuestions = data.sort(() => Math.random() - 0.5);
          setQuestions(shuffledQuestions);
        }
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, [roomId]);

  // Move to the next question when the screen is clicked
  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setGameOver(true); // End the game when all questions are answered
    }
  };

  if (gameOver) {
    return <h1>Game Over!</h1>;
  }

  return (
    <div className="room-screen" onClick={nextQuestion}>
      <h1 className="question">{questions[currentQuestionIndex]?.question}</h1>
      <p className="question-counter">
        Question {currentQuestionIndex + 1} of {questions.length}
      </p>
    </div>
  );
};

export default Room;
