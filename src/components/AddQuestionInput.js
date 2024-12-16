import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./AddQuestionInput.css";

const AddQuestionInput = ({ room_id, isExpandable = false }) => {
  const [newQuestion, setNewQuestion] = useState("");
  const [hasExpandibility, sethasExpandibility] = useState(isExpandable);

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
    <div className="input-component">
      <input
        className="c-checkbox"
        type="checkbox"
        id="checkbox"
        checked={!hasExpandibility}
        onChange={() => {
          sethasExpandibility(!hasExpandibility);
        }}
      />
      <div className="c-formContainer">
        <form className="c-form" action="">
          <input
            className="c-form__input"
            onChange={(e) => setNewQuestion(e.target.value)}
            placeholder="Type your question here..."
            required
          />
          <label className="c-form__buttonLabel" htmlFor="checkbox">
            <button
              className="c-form__button"
              type="button"
              onClick={addQuestionToDB}
            >
              Add
            </button>
          </label>
          <label
            className="c-form__toggle"
            htmlFor="checkbox"
            data-title="Add Question"
          ></label>
        </form>
      </div>
    </div>
  );
};

export default AddQuestionInput;
