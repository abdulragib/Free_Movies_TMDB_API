import {Movies, setAttributes,base_url,end_point,api_key,base_img} from './script.js'


const mainTwo = document.getElementById('demo')
const end_point_url_Second = '/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc'
const dataTwo = Movies(base_url+end_point_url_Second+api_key)
showPopularGridMovie(dataTwo)

function showPopularGridMovie(HightRatedMovie){
    console.log(HightRatedMovie)

    //HightRatedMovie is promise that why we use .then
    HightRatedMovie.then(
       (movies) => {
        movies.forEach((movie) => {
            const movieDiv = document.createElement('div')
            setAttributes(movieDiv, {"class": "card d-flex justify-content-center align-items-center col-md-2 mx-1 border border-dark slider bg-dark text-white pt-3 pb-3 mb-2 hover-box"});
            
            movieDiv.innerHTML=`
            <div class="movie">
                <img src="${base_img+movie['poster_path']}" alt="${movie['original_title']}" width="175px" height="230px" class="img-fluid">
                <p>${movie['original_title']}</p>
            </div>
            `
            console.log(movieDiv)
            mainTwo.appendChild(movieDiv)
        })
       } 
    )
    .catch((error) =>{
        console.log(error)
    })
}