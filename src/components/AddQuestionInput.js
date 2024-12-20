import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation
import "./AddQuestionInput.css";

const AddQuestionInput = ({ room_id, isExpandable = false }) => {
  const [newQuestion, setNewQuestion] = useState("");
  const [hasExpandibility, setHasExpandibility] = useState(isExpandable);
  const { t } = useTranslation(); // Get the translation function

  const addQuestionToDB = async () => {
    if (!newQuestion.trim()) {
      alert(t("question_empty")); // Use the translation key for empty question
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
        alert(t("question_added_successfully")); // Success message
        setNewQuestion(""); // Clear the input field after adding the question
      } else {
        alert(t("question_add_error")); // Error message
      }
    } catch (error) {
      console.error("Error adding question:", error);
      alert(t("error_try_again")); // Generic error message
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
          setHasExpandibility(!hasExpandibility);
        }}
      />
      <div className="c-formContainer">
        <form className="c-form" action="">
          <input
            className="c-form__input"
            onChange={(e) => setNewQuestion(e.target.value)}
            placeholder={t("question_placeholder")} // Use translation for placeholder
            required
          />
          <label className="c-form__buttonLabel" htmlFor="checkbox">
            <button
              className="c-form__button"
              type="button"
              onClick={addQuestionToDB}
            >
              {t("add_question")} {/* Button text translation */}
            </button>
          </label>
          <label
            className="c-form__toggle"
            htmlFor="checkbox"
            data-title={t("toggle_add_question")}
          ></label>
        </form>
      </div>
    </div>
  );
};

export default AddQuestionInput;
