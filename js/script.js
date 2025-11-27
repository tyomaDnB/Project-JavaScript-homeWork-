"use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', 'count');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', 'name movie'),
      b = prompt('На сколько оцените его?', 'rating movie'),
      c = prompt('Один из последних просмотренных фильмов?', 'name movie'),
      d = prompt('На сколько оцените его?', 'rating movie');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);