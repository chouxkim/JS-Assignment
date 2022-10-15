let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
	constructor(title, rating, haveWatched) {
		this.title = title;
		this.rating = rating;
		this.haveWatched = haveWatched;
	}
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
	allMovies.push(movie);
}

//iterate through all elements of allMovies array
//print out to console in a correct format
//print out the total number of movies in allMovies array
let printMovies = () => {
	var x;
	for (var i = 0; i < allMovies.length; i++) {
		console.log(allMovies[i]);
	}
	console.log(allMovies.length);
}


//print out to console, only the movies that has a rating higher than rating(argument)
//print out the total number of matches
let highRatings = (rating) => {
	var count = 0;
	for (var j = 0; j < allMovies.length; j++) {
		if (allMovies[j].rating > rating) {
			console.log(allMovies[j]);
			count += 1;
		}
	}
	console.log(count);
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
	for (var k = 0; k < allMovies.length; k++) {
		if (title === allMovies[k].title) {
			allMovies[k].haveWatched = !allMovies[k].haveWatched;
		}
	}
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE OR EDIT
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);


console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

highRatings(3.5);