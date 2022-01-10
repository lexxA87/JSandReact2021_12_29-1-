const personalMoviesDB = {
  count: null,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (
      numberOfFilms == "" ||
      numberOfFilms == null ||
      isNaN(numberOfFilms)
    ) {
      numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
    this.count = numberOfFilms;
  },
  detectPersonalLevel: function () {
    if (this.count <= 10) {
      console.log("Too many films...");
    } else if (10 < this.count && this.count <= 30) {
      console.log("Classic...");
    } else if (this.count > 30) {
      console.log("Movieman!!!");
    } else {
      console.log("Error!");
    }
  },
  rememberMyFilms: function () {
    let film1;
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
      this.movies[film1] = film1Count;
    }
  },
  writeYourGenres: function () {
    let genre;
    for (let i = 0; i < 3; i++) {
      do {
        genre = prompt(`Ваш любимый жанр под номером ${i + 1}?`).toLowerCase();
        this.genres[i] = genre;
      } while (genre == "" || genre == null || genre.length > 50);
    }
    this.genres.forEach(function (value, index) {
      console.log(`Любимый жанр #${index + 1} это ${value}.`);
    });
  },
  showMyDB: function () {
    if (!this.privat) {
      console.log(personalMoviesDB);
    }
  },
  toggleVisibleDB: function () {
    if (this.privat) {
      this.privat = false;
    } else {
      this.privat = true;
    }
  },
};
personalMoviesDB.start();

personalMoviesDB.rememberMyFilms();

personalMoviesDB.detectPersonalLevel();

personalMoviesDB.writeYourGenres();
personalMoviesDB.toggleVisibleDB();
personalMoviesDB.showMyDB();
personalMoviesDB.toggleVisibleDB();
personalMoviesDB.showMyDB();
