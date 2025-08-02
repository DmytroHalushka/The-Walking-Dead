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
let openBtns = document.querySelectorAll(".more-info-button");
let closeBtn = document.querySelector("#close-modal");

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