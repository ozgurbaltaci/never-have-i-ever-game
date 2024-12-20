import React, { useState } from "react";
import BlobButton from "./components/BlobButton";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const [room_name, setroom_name] = useState(""); // Oda ismini tutacak state
  const [room_id, setroom_id] = useState(null); // Oda ID'sini tutacak state
  const navigate = useNavigate();

  const { t, i18n } = useTranslation();

  const handleCreateRoomClick = () => {
    const room = prompt(t("enter_room_name")); // prompt ile oda ismi alınır
    if (room && room.trim()) {
      setroom_name(room);
      createRoomInDB(room);
    } else {
      alert(t("room_name_empty")); // Oda ismi boş olamaz!
    }
  };

  const handleJoinRoomClick = async () => {
    const room_idInput = prompt(t("enter_room_id"));
    if (!room_idInput) {
      alert(t("room_id_empty")); // Oda numarasını girin.
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
        alert(t("joined_room", { room_id: data.room_id })); // Odaya katıldınız
        navigate("/join-room", {
          state: { room_id: data.room_id, room_name: data.room_name },
        });
      } else {
        alert(t("invalid_room_id")); // Geçersiz oda numarası!
      }
    } catch (error) {
      console.error("Odaya katılma hatası:", error);
      alert(t("try_again_error")); // Bir hata oluştu. Lütfen tekrar deneyin.
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
        alert(t("room_created", { room_id: data.room_id })); // Oda başarıyla oluşturuldu
        navigate("/create-room", {
          state: { room_name: room_name, room_id: data.room_id },
        }); // Odayı başarıyla oluşturduktan sonra yönlendir
      } else {
        console.error("Failed to create room:", data);
        alert(t("create_room_failed")); // Oda oluşturulamadı.
      }
    } catch (error) {
      console.error("Error creating room:", error);
      alert(t("create_room_error")); // Oda oluşturulurken bir hata oluştu.
    }
  };

  return (
    <div className="start-screen">
      <h1 className="title">{t("game_title")}</h1>
      <p className="description">{t("game_description")}</p>
      <div style={{ display: "flex", gap: "15px" }}>
        <BlobButton
          className="start-button"
          buttonText={t("create_room")}
          onClick={handleCreateRoomClick} // Butona tıklandığında oda ismi prompt ile alınır
        />
        <BlobButton
          className="start-button"
          buttonText={t("join_room")}
          onClick={handleJoinRoomClick} // Odaya katılma işlemi
        />
      </div>
      {/* Eğer oda numarası varsa, ekrana yazdır */}
      {room_id && <p>{t("your_room_id", { room_id })}</p>}
    </div>
  );
};

export default HomePage;
