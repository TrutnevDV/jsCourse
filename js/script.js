"use strict";

//const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

//const personalMovieDB = {
//	count: numberOfFilms,
//	movies: {},
//	actors: {},
//	genres: [],
//	privat: false
//};
//
//let a = prompt("Один из последних просмотренных фильмов?"),
//	 b = prompt("На сколько оцените его?"),
//	 c = prompt("Один из последних просмотренных фильмов?"),
//	 d = prompt("На сколько оцените его?");

//personalMovieDB.movies[a] = b;
//personalMovieDB.movies[c] = d;

//console.log(personalMovieDB);

const RusikWaight = 70;

if (RusikWaight < 80) {
	console.log('Ты в хорошей форме!');
} else if (RusikWaight > 86){
	console.log('Ты жирный хуй!');
} else {
	console.log('Нормальный вес');
}

let num = 1; 

switch (num) {
	case 49: 
		console.log('Не правильно');
	break;
	case 60: 
		console.log('Не правильно');
	break;
	case 50:
		console.log('правильно');
		break;
	default: 
	console.log('В след раз');
	break;
}

let b = 1;
//while (b <= 50) {
//	console.log(b);
//	b++;	
//}

do {
	console.log(b);
	b++;	
}
while (b <= 50);

for (let i = 1; i < 33; i++) {
	if (i === 19) {
		continue;
	}
	console.log(i);
}