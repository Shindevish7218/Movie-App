var movieNameElement = document.getElementById("movie-name");
var searchButtonElement = document.getElementById("btn");
var movieStatus = document.getElementById("movie-status");
var movieWrapperElement = document.getElementById("movie-wrapper");
searchButtonElement.addEventListener("click", function () {

    movieWrapperElement.innerHTML = "";
    movieStatus.innerText = "Loading....."
    $.get(`https://www.omdbapi.com/?apikey=45f0782a&s=${movieNameElement.value}`, function (response) {

        if (response.Response == "True") {
            var movies = response.Search;
            movieStatus.innerText = '';
            for (var i = 0; i < movies.length; i++) {
                movieWrapperElement.innerHTML += `
            <div class="movie-card">
            <img src="${movies[i].Poster}"
                alt="" class="movie-thumbnail">
            <p>
                <b>Title :</b> ${movies[i].Title}
            </p>
            <p>
            <b>Release Year :</b> ${movies[i].Year}</p>
        </div>
            `
            }
        } else {
            movieStatus.innerText = " 404 Movies Not Found..."
        }

    });


})