import React, { useState } from "react";
import "./App.css";
import BlobButton from "./components/BlobButton";

// Sorular listesi
const questions = [
  { question: "Hiç uçak kazası geçirdin mi?" },
  { question: "Hiç yalan söyledin mi?" },
  { question: "Hiç korkunç bir film izledin mi?" },
  { question: "Hiç birini sevdiğini söyledin ama hissetmedin mi?" },
  { question: "Hiç evden kaçtın mı?" },
  { question: "Hiç yolda kayboldun mu?" },
  { question: "Hiç uçan balonla uçtun mu?" },
];

function App() {
  const [startGame, setStartGame] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // Başla butonuna tıklandığında oyuna başlama fonksiyonu
  const startGameHandler = () => {
    setStartGame(true);
    setCurrentQuestionIndex(0); // Oyunun başladığında ilk soruyu göster
    setGameOver(false); // Oyun bitme durumunu sıfırla
  };

  // Soru geçişi fonksiyonu (ekranın herhangi bir yerine tıklayınca)
  const nextQuestionHandler = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setGameOver(true); // Son soruya gelindiğinde oyun biter
    }
  };

  return (
    <div className="App">
      {!startGame ? (
        <div className="start-screen">
          <h1 className="title">Never Have I Ever</h1>
          <p className="description">
            Hazır mısınız? Bu oyun, hiç yapmadığınız şeyleri keşfetmeniz için
            eğlenceli bir fırsat sunuyor! Şimdi, arkadaşlarınızla veya
            kendinizle ne kadar dürüstsünüz?
          </p>
          <BlobButton className="start-button" onClick={startGameHandler}>
            Başla
          </BlobButton>
        </div>
      ) : (
        <div className="question-screen" onClick={nextQuestionHandler}>
          {!gameOver ? (
            <h1 className="question">
              {questions[currentQuestionIndex].question}
            </h1>
          ) : (
            <h1 className="game-over">Tüm sorular bitti!</h1>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
