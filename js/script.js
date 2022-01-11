/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

const movieDB = {
  movies: [
    "Атлантида",
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Бойцовский клуб",
    "Одержимость",
    "Скотт Пилигрим против...",
    "Властилин колец",
  ],
};

//1)
const promoAdv = document.querySelector(".promo__adv");
const promoAdvImg = promoAdv.querySelectorAll("img");
promoAdvImg.forEach((item) => {
  item.remove();
});

//2)
const promoGenre = document.querySelector(".promo__genre");
promoGenre.textContent = "драма";

//3)
const promoBg = document.querySelector(".promo__bg");
promoBg.style.backgroundImage = 'url("./img/bg.jpg")';

//4)
const movieList = document.querySelector(".promo__interactive-list");
movieList.innerHTML = "";
movieDB.movies.sort();
// promoInteractiveItems.forEach((item, i) => {
//   item.textContent = `${i + 1}. ${movieDB.movies[i]}`;
// });
movieDB.movies.forEach((film, i) => {
  movieList.innerHTML += `<li class="promo__interactive-item">${i + 1}. ${film}
    <div class="delete"></div>
</li>`;
});
