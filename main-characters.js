let characters = [
  {
    modal_name: "Рик Граймс",
    modal_gender: "Чоловічий",
    modal_location: "Александрія",
    modal_status: "Живий",
    modal_eye_color: "Карі",
    modal_hair_color: "Темно-русявий",
    modal_weapon: "Револьвер",
    modal_work: "Лідер громади",
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
    modal_work: "Воєнна радниця",
    modal_actor: "Даніай Ґуріра",
  },
  {
    modal_name: "Керол Пелетьєр",
    modal_gender: "Жіночий",
    modal_location: "Александрія",
    modal_status: "Жива",
    modal_eye_color: "Сірі",
    modal_hair_color: "Світло-русяве",
    modal_weapon: "Пістолет",
    modal_work: "Захисниця громади",
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
    modal_work: "Син Ріка",
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
    modal_work: "Постачальник",
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
    modal_work: "Лідер Хілтопу",
    modal_actor: "Лорен Коен",
  },
  {
    modal_name: "Шейн Волш",
    modal_gender: "Чоловічий",
    modal_location: "Будинок Герше́ля",
    modal_status: "Мертвий",
    modal_eye_color: "Карі",
    modal_hair_color: "Темно-каштанове",
    modal_weapon: "Пістолет",
    modal_work: "Колишній коп",
    modal_actor: "Джон Бернтал",
  },
];

let modal = document.getElementById("modal");
let openBtns = document.querySelectorAll(".more-info-button");
let closeBtn = document.getElementById("close-modal");

openBtns.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    modal.style.display = "flex";

    modal.querySelector(".modal_name").innerHTML =
      characters[index].modal_name;
    modal.querySelector(".modal_gender").innerHTML =
      characters[index].modal_gender;
    modal.querySelector(".modal_location").innerHTML =
      characters[index].modal_location;
    modal.querySelector(".modal_status").innerHTML =
      characters[index].modal_status;
    modal.querySelector(".modal_eye_color").innerHTML =
      characters[index].modal_eye_color;
    modal.querySelector(".modal_hair_color").innerHTML =
      characters[index].modal_hair_color;
    modal.querySelector(".modal_weapon").innerHTML =
      characters[index].modal_weapon;
    modal.querySelector(".modal_work").innerHTML =
      characters[index].modal_work;
    modal.querySelector(".modal_actor").innerHTML =
      characters[index].modal_actor;
  });
});
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});
modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
