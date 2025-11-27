"use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', 'count');

const personalMovieDB = {
    count: numberOfFilms,
    movies: movies = {},
    actors: actors = {},
    genres: genres = [],
    privat: false
};