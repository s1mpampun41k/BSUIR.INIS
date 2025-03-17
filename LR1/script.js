let numberOfFilms;

do {
    numberOfFilms = prompt("Как много фильмов вы посмотрели?", "");
} while (numberOfFilms === null || numberOfFilms.trim() === "" || isNaN(numberOfFilms));

const personalMovieDB = {
    count: +numberOfFilms,
    movies: {}
};

for (let i = 0; i < numberOfFilms; i++) {
    let lastMovie, movieRating;
    
    do {
        lastMovie = prompt("Какой один из последних фильмов вы посмотрели?", "");
    } while (!lastMovie || lastMovie.length > 50);
    
    do {
        movieRating = prompt("Оцените его:", "");
    } while (!movieRating || isNaN(movieRating) || movieRating.trim() === "");
    
    personalMovieDB.movies[lastMovie] = movieRating;
}

console.log(personalMovieDB);

function displayMovies() {
    const tableContainer = document.getElementById("moviesTable");
    const table = document.createElement("table");
    table.border = "1";
    
    const headerRow = document.createElement("tr");
    headerRow.innerHTML = "<th>Фильм</th><th>Оценка</th>";
    table.appendChild(headerRow);
    
    for (let movie in personalMovieDB.movies) {
        const row = document.createElement("tr");
        
        const movieNameCell = document.createElement("td");
        movieNameCell.textContent = movie;
        row.appendChild(movieNameCell);
        
        const movieRatingCell = document.createElement("td");
        movieRatingCell.textContent = personalMovieDB.movies[movie];
        row.appendChild(movieRatingCell);
        
        table.appendChild(row);
    }
    
    tableContainer.appendChild(table);
}

displayMovies();