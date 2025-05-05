let numberOfFilms;

do {
    numberOfFilms = prompt("How many films did u watch?", "");
} while (numberOfFilms === null || numberOfFilms.trim() === "" || isNaN(numberOfFilms));

const personalMovieDB = {
    count: +numberOfFilms,
    movies: {}
};

for (let i = 0; i < numberOfFilms; i++) {
    let lastMovie, movieRating;
    
    do {
        lastMovie = prompt("One of last films u watched?", "");
    } while (!lastMovie || lastMovie.length > 50);
    
    do {
        movieRating = prompt("Mark it on:", "");
    } while (!movieRating || isNaN(movieRating) || movieRating.trim() === "");
    
    personalMovieDB.movies[lastMovie] = movieRating;
}

console.log(personalMovieDB);

function displayMovies() {
    const tableContainer = document.getElementById("moviesTable");
    const table = document.createElement("table");
    table.border = "1";
    
    const headerRow = document.createElement("tr");
    headerRow.innerHTML = "<th>Film</th><th>Mark</th>";
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
