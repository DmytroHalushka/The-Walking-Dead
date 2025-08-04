const characters = [
    {
      modal_name: "Шейн Волш",
      modal_gender: "Чоловічий",
      modal_location: "Будинок Хершела",
      modal_status: "Мертвий",
      modal_eye_color: "Карі",
      modal_hair_color: "Темно-русявий",
      modal_weapon: "Пістолет",
      modal_work: "Колишній поліцейський",
      modal_actor: "Джон Бернтал",
    },
    {
      modal_name: "Філіп Блейк",
      modal_gender: "Чоловічий",
      modal_location: "Вудбері",
      modal_status: "Мертвий",
      modal_eye_color: "Блакитні",
      modal_hair_color: "Темно-русявий",
      modal_weapon: "Автомат",
      modal_work: "Менеджер",
      modal_actor: "Майкл Рукер",
    },
    {
      modal_name: "Ніган Сміт",
      modal_gender: "Чоловічий",
      modal_location: "Санктуарій",
      modal_status: "Живий",
      modal_eye_color: "Карі",
      modal_hair_color: "Чорний",
      modal_weapon: "Бейсбольна бита",
      modal_work: "Фізрук",
      modal_actor: "Джеффрі Дін Морган",
    },
    {
      modal_name: "Альфа",
      modal_gender: "Жіночий",
      modal_location: "Не існує",
      modal_status: "Мертва",
      modal_eye_color: "Блакитні",
      modal_hair_color: "Лисі",
      modal_weapon: "Ніж",
      modal_work: "Невідомо",
      modal_actor: "Саманта Мортон",
    },
    {
      modal_name: "Гарет",
      modal_gender: "Чоловічий",
      modal_location: "Термінус",
      modal_status: "Мертвий",
      modal_eye_color: "Карі",
      modal_hair_color: "Світло-русявий",
      modal_weapon: "Ніж",
      modal_work: "Солдат",
      modal_actor: "Джошуа Бурк",
    },
    {
      modal_name: "Саймон",
      modal_gender: "Чоловічий",
      modal_location: "Санктуарій",
      modal_status: "Мертвий",
      modal_eye_color: "Карі",
      modal_hair_color: "Чорний",
      modal_weapon: "Пістолет",
      modal_work: "Невідомо",
      modal_actor: "Стефен Оґґ",
    }
  ];

let modal = document.getElementById("modal");
let modal_content = document.querySelector(".modal-content")
let openBtns = document.querySelectorAll(".more-info-button");
let closeBtn = document.getElementById("close-modal");
let TWD = document.querySelectorAll(".TWD")

const fields = [
  "modal_name",
  "modal_gender",
  "modal_location",
  "modal_status",
  "modal_eye_color",
  "modal_hair_color",
  "modal_weapon",
  "modal_work",
  "modal_actor",
];

openBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    // Заповнюємо модалку відповідними даними
    fields.forEach((field) => {
      document.querySelector(`.${field}`).textContent = characters[index][field];
    });

    modal.classList.remove("hidden");
    setTimeout(() => modal_content.classList.add("active"), 10);
  });
});

// Закриття модалки
closeBtn.addEventListener("click", () => {
  modal_content.classList.remove("active");
  setTimeout(() => modal.classList.add("hidden"), 500);
});

// Закриття по кліку на фон
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal_content.classList.remove("active");
    setTimeout(() => modal.classList.add("hidden"), 500);
  }
});