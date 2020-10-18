// import API_TOKEN from './helpers/token'
const API_TOKEN = '571223c5736c5183edb7bf1b695a8c1a'

export function getFilmsFromApiWithSearchedText(text){
    const url = 'https://api.themoviedb.org/3/search/movie?api_key='+ API_TOKEN + '&language=fr&query='+text 
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error))

}