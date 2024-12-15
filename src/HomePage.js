import React, { useState } from "react";
import BlobButton from "./components/BlobButton";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [room_name, setroom_name] = useState(""); // Oda ismini tutacak state
  const [room_id, setroom_id] = useState(null); // Oda ID'sini tutacak state
  const navigate = useNavigate();

  const handleCreateRoomClick = () => {
    const room = prompt("Oda ismini girin:"); // prompt ile oda ismi alınır
    if (room && room.trim()) {
      setroom_name(room);
      createRoomInDB(room);
    } else {
      alert("Oda ismi boş olamaz!");
    }
  };

  const handleJoinRoomClick = async () => {
    const room_idInput = prompt("Oda numarasını girin:");
    if (!room_idInput) {
      alert("Oda numarasını girin.");
      return;
    }

    // Oda numarasını doğrulama
    try {
      const response = await fetch(
        `http://localhost:8080/api/rooms/${room_idInput}`
      );
      const data = await response.json();
      console.log("hereid:", data.room_id);

      console.log("here:", data.room_name);
      if (response.status === 200) {
        setroom_id(room_idInput);
        alert(`Odaya katıldınız: ${data.room_id}`);
        navigate("/join-room", {
          state: { room_id: data.room_id, room_name: data.room_name },
        });
      } else {
        alert("Geçersiz oda numarası!");
      }
    } catch (error) {
      console.error("Odaya katılma hatası:", error);
      alert("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };

  const createRoomInDB = async (room_name) => {
    try {
      const response = await fetch("http://localhost:8080/createRoom", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ room_name: room_name }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Room created successfully:", data);
        setroom_id(data.room_id); // Dönen room_id'yi state'e kaydet
        navigate("/create-room", {
          state: { room_name: room_name, room_id: data.room_id },
        }); // Odayı başarıyla oluşturduktan sonra yönlendir
      } else {
        console.error("Failed to create room:", data);
      }
    } catch (error) {
      console.error("Error creating room:", error);
    }
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
          onClick={handleCreateRoomClick} // Butona tıklandığında oda ismi prompt ile alınır
        />
        <BlobButton
          className="start-button"
          buttonText={"Join a room"}
          onClick={handleJoinRoomClick} // Odaya katılma işlemi
        />
      </div>
      {/* Eğer oda numarası varsa, ekrana yazdır */}
      {room_id && <p>Oda numaranız: {room_id}</p>}
    </div>
  );
};

export default HomePage;
