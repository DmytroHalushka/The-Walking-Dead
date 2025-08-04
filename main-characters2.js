let characters = [
  {
    modal_name: "Розіта Еспіноза",
    modal_gender: "Жіночий",
    modal_location: "Александрія",
    modal_status: "Мертва",
    modal_eye_color: "Карі",
    modal_hair_color: "Темно-каштановий",
    modal_weapon: "Автомат",
    modal_work: "Невідомо",
    modal_actor: "Крістіан Серратос",
  },
  {
    modal_name: "Юджин Портер",
    modal_gender: "Чоловічий",
    modal_location: "Александрія",
    modal_status: "Живий",
    modal_eye_color: "Сірі",
    modal_hair_color: "Темний",
    modal_weapon: "Немає",
    modal_work: "Вчений",
    modal_actor: "Джош Макдермітт",
  },
  {
    modal_name: "Абрахам Форд",
    modal_gender: "Чоловічий",
    modal_location: "Александрія",
    modal_status: "Мертвий",
    modal_eye_color: "Блакитні",
    modal_hair_color: "Рудий",
    modal_weapon: "Автомат",
    modal_work: "Солдат",
    modal_actor: "Майкл Катліц",
  },
  {
    modal_name: "Андреа Харрісон",
    modal_gender: "Жіночий",
    modal_location: "Вудбері",
    modal_status: "Мертва",
    modal_eye_color: "Блакитні",
    modal_hair_color: "Блондинка",
    modal_weapon: "Снайперська гвинтівка",
    modal_work: "Адвокат",
    modal_actor: "Лорі Холден",
  },
  {
    modal_name: "Лорі Граймс",
    modal_gender: "Жіночий",
    modal_location: "Тюрма",
    modal_status: "Мертва",
    modal_eye_color: "Карі",
    modal_hair_color: "Темний",
    modal_weapon: "Немає",
    modal_work: "Домогосподарка",
    modal_actor: "Сара Вейн Келліс",
  },
  {
    modal_name: "Морган Джонс",
    modal_gender: "Чоловічий",
    modal_location: "Королівство",
    modal_status: "Живий",
    modal_eye_color: "Темні",
    modal_hair_color: "Чорний",
    modal_weapon: "Палиця",
    modal_work: "Будівник",
    modal_actor: "Ленні Джеймс",
  },
  {
    modal_name: "Дейл Горвaт",
    modal_gender: "Чоловічий",
    modal_location: "Будинок Гершела",
    modal_status: "Мертвий",
    modal_eye_color: "Сірі",
    modal_hair_color: "Сивий",
    modal_weapon: "Вінчестер",
    modal_work: "Медик-санітар",
    modal_actor: "Джеффрі ДеМанн",
  },
  {
    modal_name: "Гершел Грін",
    modal_gender: "Чоловічий",
    modal_location: "Тюрма",
    modal_status: "Мертвий",
    modal_eye_color: "Блакитні",
    modal_hair_color: "Сивий",
    modal_weapon: "Немає",
    modal_work: "Фермер",
    modal_actor: "Скотт Вілсон",
  },
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