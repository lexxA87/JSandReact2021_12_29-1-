let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
//console.log(numberOfFilms);

const personalMoviesDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let film1 = prompt("Один из просмотренных последних фильмов?", "");
//console.log(film1);
let film1Count = prompt("На сколько оцениваете?", "");
let film2 = prompt("Один из просмотренных последних фильмов?", "");
let film2Count = prompt("На сколько оцениваете?", "");

personalMoviesDB.movies[film1] = film1Count;
personalMoviesDB.movies[film2] = film2Count;
// {
//   film1: film1Count,
//   film2: film2Count,
// };

console.log(personalMoviesDB);
