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
      start_game: "Start Game",
      question_empty: "Question cannot be empty!",
      question_added_successfully: "Question added successfully!",
      question_add_error: "There was an error adding the question!",
      error_try_again: "An error occurred. Please try again.",
      question_placeholder: "Type your question here...",
      add_question: "Add",
      toggle_add_question: "Add Question",
      room_title: "Room {{roomId}}: {{roomName}}", // Room title with placeholders
      questions_in_room:
        "There are already {{count}} questions in the room. You can add more questions below.",
      no_questions_in_room:
        "There are no questions here. You must add some questions to start the game.",
      start_game: "Start Game",
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
      start_game: "Oyunu Başlat",
      question_empty: "Soru boş olamaz!",
      question_added_successfully: "Soru başarıyla eklendi!",
      question_add_error: "Soruyu eklerken bir hata oluştu!",
      error_try_again: "Bir hata oluştu. Lütfen tekrar deneyin.",
      question_placeholder: "Sorunuzu buraya yazın...",
      add_question: "Ekle",
      toggle_add_question: "Soru Ekle",
      room_title: "Oda {{roomId}}: {{roomName}}", // Room title with placeholders
      questions_in_room:
        "Odada zaten {{count}} soru var. Daha fazla soru ekleyebilirsiniz.",
      no_questions_in_room:
        "Burada hiç soru yok. Oyunu başlatmak için bazı sorular eklemeniz gerekiyor.",
      start_game: "Oyunu Başlat",
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
      start_game: "Comenzar el Juego",
      question_empty: "¡La pregunta no puede estar vacía!",
      question_added_successfully: "¡Pregunta agregada con éxito!",
      question_add_error: "¡Hubo un error al agregar la pregunta!",
      error_try_again: "Ocurrió un error. Por favor, inténtelo de nuevo.",
      question_placeholder: "Escribe tu pregunta aquí...",
      add_question: "Agregar",
      toggle_add_question: "Agregar pregunta",
      room_title: "Sala {{roomId}}: {{roomName}}", // Room title with placeholders
      questions_in_room:
        "Ya hay {{count}} preguntas en la sala. Puedes agregar más preguntas a continuación.",
      no_questions_in_room:
        "No hay preguntas aquí. Debes agregar algunas preguntas para comenzar el juego.",
      start_game: "Iniciar Juego",
    },
  },
};

i18n.use(initReactI18next).init({ lng: "en", resources });

export default i18n;
