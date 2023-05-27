fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=e81c2783a9982817dc6016178137f0cd')
.then(res => res.json())
.then(data => SetMovie(data.results))


const SetMovie = (movies) =>{

    const divRow = document.getElementById('movie-box')
    for(const movie of movies){
        const movieSpinner = document.getElementById('movie-spinner')
        movieSpinner.style.display = 'none';
        const movieBox = document.createElement('div');
        const imgUrl = "https://image.tmdb.org/t/p/original/" + movie.poster_path;
        console.log(imgUrl)
        movieBox.classList.add('col-md-3')
        movieBox.innerHTML = `
         <div class="shadow rounded p-3 m-2">
         <img class ="img-fluid" src="${imgUrl}" alt="">
            <h4>${movie.title}</h4>
            <p>${movie.overview.slice(0, 150)}</p>
            <button onclick = "setDetails('${movie.id}')" class="btn btn-primary">See details</button>
         </div>
        `
        
        divRow.appendChild(movieBox);
    }
}

const setDetails = (id) =>{
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e81c2783a9982817dc6016178137f0cd`)
    .then(res => res.json())
    .then(data => SetMovieDetails (data))
}

const SetMovieDetails =(movie) =>{
    console.log(movie);
    const movieDetails = document.getElementById('movie-details');
    movieDetails.innerHTML ="";
    const movieDetailslBox = document.createElement('div');

    movieDetails.innerHTML = `
        <h3>${movie.original_title}</h3>
    `
    movieDetails.appendChild(movieDetailslBox);

}