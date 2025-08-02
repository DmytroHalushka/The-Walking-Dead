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
      modal_location: "Ніснус",
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