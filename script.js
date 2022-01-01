let numberOfFilms;
//console.log(numberOfFilms);

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

start();

const personalMoviesDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let film1;
//console.log(film1);
let film1Count;

let genre;

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    do {
      film1 = prompt("Один из просмотренных последних фильмов?", "");
      film1Count = prompt("На сколько оцениваете?", "");
    } while (
      film1 === null ||
      film1Count === null ||
      film1 === "" ||
      film1Count === "" ||
      film1.length > 50
    );
    personalMoviesDB.movies[film1] = film1Count;
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (numberOfFilms <= 10) {
    console.log("Too many films...");
  } else if (10 < numberOfFilms && numberOfFilms <= 30) {
    console.log("Classic...");
  } else if (numberOfFilms > 30) {
    console.log("Movieman!!!");
  } else {
    console.log("Error!");
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMoviesDB);
  }
}

writeYourGenres();
showMyDB(personalMoviesDB.privat);

function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    do {
      genre = prompt(`Ваш любимый жанр под номером ${i + 1}?`);
      personalMoviesDB.genres[i] = genre;
    } while (genre == "" || genre == null || genre.length > 50);
  }
}
