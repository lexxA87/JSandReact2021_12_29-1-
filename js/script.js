"use strict";

document.addEventListener("DOMContentLoaded", () => {
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

  const addForm = document.querySelector("form.add"),
    addInput = addForm.querySelector(".adding__input"),
    checkbox = addForm.querySelector('[type="checkbox"]'),
    promoAdv = document.querySelector(".promo__adv"),
    promoAdvImg = promoAdv.querySelectorAll("img"),
    promoGenre = document.querySelector(".promo__genre"),
    promoBg = document.querySelector(".promo__bg"),
    movieList = document.querySelector(".promo__interactive-list");

  addForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let newFilm = addInput.value;
    const favorite = checkbox.checked;

    if (newFilm) {
      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 22)}...`;
      }
      if (favorite) {
        console.log("Выбран любимый фильм!");
      }
      movieDB.movies.push(newFilm);
      sortArr(movieDB.movies);

      createMoviesList(movieDB.movies, movieList);
    }

    event.target.reset();
  });

  const deleteAdv = (arr) => {
    arr.forEach((item) => {
      item.remove();
    });
  };

  const makeChanges = () => {
    promoGenre.textContent = "драма";

    promoBg.style.backgroundImage = 'url("./img/bg.jpg")';
  };

  const sortArr = (arr) => {
    arr.sort();
  };

  function createMoviesList(films, parent) {
    parent.innerHTML = "";
    sortArr(films);
    films.forEach((film, i) => {
      parent.innerHTML += `<li class="promo__interactive-item">${i + 1}. ${film}
            <div class="delete"></div>
        </li>`;
    });

    document.querySelectorAll(".delete").forEach((btn, i) => {
      btn.addEventListener("click", () => {
        btn.parentElement.remove();
        films.splice(i, 1);

        createMoviesList(films, parent);
      });
    });
  }

  deleteAdv(promoAdvImg);
  makeChanges();

  createMoviesList(movieDB.movies, movieList);
});
