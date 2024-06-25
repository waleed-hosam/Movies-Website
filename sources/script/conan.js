let hover = document.querySelectorAll(".flex")
let playBtn = document.querySelectorAll(".flex .fa-play")
let film_span = document.querySelectorAll(".film-span")
let film_poster = document.querySelectorAll(".poster")
let movie_name = document.querySelectorAll('.film p')
let index = document.querySelectorAll(".index")
let static = 27
let num_of_movies = 27
let num_of_images = 27
let movies_names_index = 0 
window.onload = () => {
    film_poster.forEach((poster) => {
        poster.setAttribute("src", `Sources/images/conan-posters/${num_of_images}.png`)
        num_of_images -= 1
    })
    index.forEach((movie) => {
        let length_of_index = num_of_movies.toString().length
        if (length_of_index == static.toString().length) {
            movie.innerHTML = num_of_movies
            num_of_movies -= 1
        } else {
            var all_movies = static.toString().length
            var movies_index_lenght = num_of_movies.toString().length
            var subtraction = (all_movies - movies_index_lenght) * "0"
            movie.innerHTML = `${subtraction}${num_of_movies}`
            num_of_movies -= 1
        }
    })
    movie_name.forEach((name) => {
        name.innerHTML = `${movies_names_array[movies_names_index]}`
        movies_names_index += 1
    })
    film_span.forEach((span) => {
        span.innerHTML = "Movie"
    })
    document.querySelector(".container").style.visibility = "visible"
}
