import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      game_title: "Never Have I Ever",
      game_description:
        "Are you ready? This game offers a fun opportunity to discover things you've never done before! How honest are you with your friends or yourself?",
      create_room: "Create a room",
      join_room: "Join a room",
      enter_room_name: "Enter the room name:",
      room_name_empty: "Room name cannot be empty!",
      enter_room_id: "Enter the room ID:",
      room_id_empty: "Room ID cannot be empty!",
      invalid_room_id: "Invalid room ID!",
      joined_room: "You joined the room: {{room_id}}",
      try_again_error: "An error occurred. Please try again.",
      create_room_error: "Error creating the room.",
      create_room_failed: "Failed to create the room.",
      room_created: "Room created successfully:",
      your_room_id: "Your room ID: {{room_id}}",
    },
  },

  tr: {
    translation: {
      game_title: "Hiç Yapmadım",
      game_description:
        "Hazır mısınız? Bu oyun, hiç yapmadığınız şeyleri keşfetmeniz için eğlenceli bir fırsat sunuyor! Arkadaşlarınızla veya kendinizle ne kadar dürüstsünüz?",
      create_room: "Oda oluştur",
      join_room: "Odaya katıl",
      enter_room_name: "Oda ismini girin:",
      room_name_empty: "Oda ismi boş olamaz!",
      enter_room_id: "Oda numarasını girin:",
      room_id_empty: "Oda numarası boş olamaz!",
      invalid_room_id: "Geçersiz oda numarası!",
      joined_room: "Odaya katıldınız: {{room_id}}",
      try_again_error: "Bir hata oluştu. Lütfen tekrar deneyin.",
      create_room_error: "Oda oluşturulurken bir hata oluştu.",
      create_room_failed: "Oda oluşturulamadı.",
      room_created: "Oda başarıyla oluşturuldu:",
      your_room_id: "Oda numaranız: {{room_id}}",
    },
  },

  es: {
    translation: {
      game_title: "Yo nunca nunca",
      game_description:
        "¿Estás listo? Este juego ofrece una oportunidad divertida para descubrir cosas que nunca has hecho antes. ¿Qué tan honesto eres contigo mismo o con tus amigos?",
      create_room: "Crear una sala",
      join_room: "Unirse a una sala",
      enter_room_name: "Ingrese el nombre de la sala:",
      room_name_empty: "¡El nombre de la sala no puede estar vacío!",
      enter_room_id: "Ingrese el número de la sala:",
      room_id_empty: "¡El número de la sala no puede estar vacío!",
      invalid_room_id: "¡Número de sala no válido!",
      joined_room: "Te uniste a la sala: {{room_id}}",
      try_again_error: "Ocurrió un error. Intenta de nuevo.",
      create_room_error: "Ocurrió un error al crear la sala.",
      create_room_failed: "No se pudo crear la sala.",
      room_created: "Sala creada con éxito:",
      your_room_id: "Tu número de sala: {{room_id}}",
    },
  },
};

i18n.use(initReactI18next).init({ lng: "en", resources });

export default i18n;
