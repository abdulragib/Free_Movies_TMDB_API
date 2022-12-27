export const base_url = 'https://api.themoviedb.org/3'
export const end_point='/discover/movie?sort_by=popularity.desc'
export const api_key='&api_key=89bd96090b6c1c5f41e3ba71b98b9548'

const api_url=base_url+end_point+api_key

export const Movies = async (url) => {
 const movie = await fetch(url)
 const movie_data = await movie.json()
 const data = await movie_data["results"]
 console.log(data)
 return data
}

const data = Movies(api_url)
showPopularMovie(data)

export const base_img='https://image.tmdb.org/t/p/w500'

const main = document.getElementById('main')

function showPopularMovie(HightRatedMovie){
    console.log(HightRatedMovie)

    //HightRatedMovie is promise that why we use .then
    HightRatedMovie.then(
       (movies) => {
        movies.forEach((movie) => {
            const movieDiv = document.createElement('div')
            setAttributes(movieDiv, {"class": "card col-md-2 border border-dark slider bg-dark text-white pt-3 pb-3 hover-box"});
            
            movieDiv.innerHTML=`
            <div class="movie">
                <img src="${base_img+movie['poster_path']}" alt="${movie['original_title']}" width="175px" height="230px" class="img-fluid">
                <p>${movie['original_title']}</p>
            </div>
            `
            console.log(movieDiv)
            main.appendChild(movieDiv)
        })
       } 
    )
}

export function setAttributes(card, attrs) {
    for(var key in attrs) {
      card.setAttribute(key, attrs[key]);
    }
  }


//Hight Rated Movies
const mainOne = document.getElementById('mainOne')
const end_point_url = '/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc'
const dataOne = Movies(base_url+end_point_url+api_key) 
showHightRatedMovie(dataOne)

function showHightRatedMovie(HightRatedMovie){
    console.log(HightRatedMovie)

    //HightRatedMovie is promise that why we use .then
    HightRatedMovie.then(
       (movies) => {
        movies.forEach((movie) => {
            const movieDiv = document.createElement('div')
            setAttributes(movieDiv, {"class": "card col-md-2 border border-dark slider bg-dark text-white pt-3 pb-3 hover-box"});
            
            movieDiv.innerHTML=`
            <div class="movie">
                <img src="${base_img+movie['poster_path']}" alt="${movie['original_title']}" width="175px" height="230px" class="img-fluid">
                <p>${movie['original_title']}</p>
            </div>
            `
            console.log(movieDiv)
            mainOne.appendChild(movieDiv)
        })
       } 
    )
    .catch((error) =>{
        console.log(error)
    })
}


//latest_movies page


