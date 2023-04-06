"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const film1 = prompt("Один из последних промотренных фильмов?", ""),
      rate1 = prompt("На сколько вы его оцените?", ""),
      film2 = prompt("Один из последних промотренных фильмов?", ""),
      rate2 = prompt("На сколько вы его оцените?", "");
personalMovieDB.movies[film1] = rate1;
personalMovieDB.movies[film2] = rate2;
console.log(personalMovieDB);
