// import API_TOKEN from './helpers/token'
const API_TOKEN = '571223c5736c5183edb7bf1b695a8c1a'

export function getFilmsFromApiWithSearchedText(text, page){
    const url = 'https://api.themoviedb.org/3/search/movie?api_key='+ API_TOKEN + '&language=fr&query='+text+ '&page='+ page   
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error))

}

export function getImageFromApi(name){
    return 'https://image.tmdb.org/t/p/w300' + name
}