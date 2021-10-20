"use strict";

 let numberOfFilms;

	function start () {
		numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

		while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
			numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
		}

	}

	// start ();

 const personalMovieDB = {
 	count: numberOfFilms,
 	movies: {},
 	actors: {},
 	genres: [],
 	privat: false
 };

 function rememberMyFilm () {
	for (let i = 0; i < 2; i++) {
		const a = prompt("Один из последних просмотренных фильмов?"),
			  b = prompt("На сколько оцените его?");
  
		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log('done');
		} else {
			console.log('error');
			i--;
		}
	}
 }

//  rememberMyFilm ();


 

function detectMyFilm () {
	if (personalMovieDB.count < 10) {
		console.log('Просмотрено довольно мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log('Вы классический зритель');
	} else if (personalMovieDB.count > 50) {
		console.log('Вы киноман');
	} else {
		console.log('Произошла ошибка');
	}
}

// detectMyFilm ();

function showMyDB (hidden) {
	if (!hidden) {
		console.log('personalMovieDB');
	}
}

showMyDB(personalMovieDB.privat);

function writeYourGenres () {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i - 1] = +prompt(`Ваш любимый жанр под номером ${i}`);
	}
}

// writeYourGenres ();

 console.log(personalMovieDB);




// const RusikWaight = 70;

// if (RusikWaight < 80) {
// 	console.log('Ты в хорошей форме!');
// } else if (RusikWaight > 86){
// 	console.log('Ты жирный хуй!');
// } else {
// 	console.log('Нормальный вес');
// }

// let num = 1; 

// switch (num) {
// 	case 49: 
// 		console.log('Не правильно');
// 	break;
// 	case 60: 
// 		console.log('Не правильно');
// 	break;
// 	case 50:
// 		console.log('правильно');
// 		break;
// 	default: 
// 	console.log('В след раз');
// 	break;
// }

// let b = 1;
//while (b <= 50) {
//	console.log(b);
//	b++;	
//}

// do {
// 	console.log(b);
// 	b++;	
// }
// while (b <= 50);

// for (let i = 1; i < 33; i++) {
// 	if (i === 19) {
// 		continue;
// 	}
// 	console.log(i);
// }






