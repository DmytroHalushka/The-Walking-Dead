let characters = [
  {
    modal_name: "Рик Граймс",
    modal_gender: "Чоловічий",
    modal_location: "Александрія",
    modal_status: "Живий",
    modal_eye_color: "Карі",
    modal_hair_color: "Темно-русявий",
    modal_weapon: "Револьвер",
    modal_work: "Колишній коп",
    modal_actor: "Ендрю Лінкольн",
  },
  {
    modal_name: "Даріл Діксон",
    modal_gender: "Чоловічий",
    modal_location: "Александрія",
    modal_status: "Живий",
    modal_eye_color: "Блакитні",
    modal_hair_color: "Темно-русявий",
    modal_weapon: "Арбалет",
    modal_work: "Слідопит",
    modal_actor: "Норман Рідус",
  },
  {
    modal_name: "Мішонн Граймс",
    modal_gender: "Жіночий",
    modal_location: "Александрія",
    modal_status: "Жива",
    modal_eye_color: "Карі",
    modal_hair_color: "Чорні",
    modal_weapon: "Катана",
    modal_work: "Юристка",
    modal_actor: "Даніай Ґуріра",
  },
  {
    modal_name: "Керол Пелетьєр",
    modal_gender: "Жіночий",
    modal_location: "Александрія",
    modal_status: "Жива",
    modal_eye_color: "Блакитні",
    modal_hair_color: "Світло-русяве",
    modal_weapon: "Пістолет",
    modal_work: "Домогосподарка",
    modal_actor: "Мелісса МакБрайд",
  },
  {
    modal_name: "Карл Граймс",
    modal_gender: "Чоловічий",
    modal_location: "Александрія",
    modal_status: "Мертвий",
    modal_eye_color: "Блакитні",
    modal_hair_color: "Каштанове",
    modal_weapon: "Пістолет",
    modal_work: "Немає",
    modal_actor: "Чандлер Ріггз",
  },
  {
    modal_name: "Гленн Рі",
    modal_gender: "Чоловічий",
    modal_location: "Александрія",
    modal_status: "Мертвий",
    modal_eye_color: "Карі",
    modal_hair_color: "Чорні",
    modal_weapon: "Пістолет",
    modal_work: "Кур'єр",
    modal_actor: "Стівен Юн",
  },
  {
    modal_name: "Меггі Рі",
    modal_gender: "Жіночий",
    modal_location: "Хілтоп",
    modal_status: "Жива",
    modal_eye_color: "Зелені",
    modal_hair_color: "Каштанове",
    modal_weapon: "Пістолет",
    modal_work: "Фермер",
    modal_actor: "Лорен Коен",
  },
  {
    modal_name: "Шейн Волш",
    modal_gender: "Чоловічий",
    modal_location: "Будинок Херше́ла",
    modal_status: "Мертвий",
    modal_eye_color: "Карі",
    modal_hair_color: "Темно-каштанове",
    modal_weapon: "Пістолет",
    modal_work: "Колишній коп",
    modal_actor: "Джон Бернтал",
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