let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
//console.log(numberOfFilms);

if (numberOfFilms <= 10) {
  console.log("Too many films...");
} else if (10 < numberOfFilms && numberOfFilms <= 30) {
  console.log("Classic...");
} else if (numberOfFilms > 30) {
  console.log("Movieman!!!");
} else {
  console.log("Error!");
}

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
// {
//   film1: film1Count,
//   film2: film2Count,
// };

console.log(personalMoviesDB);
