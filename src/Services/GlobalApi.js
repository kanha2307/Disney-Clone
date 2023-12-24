import axios from 'axios'

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key = "65c0b5c2c90e3d7e21bb3f1f0f0f8252"
const moviebygenrebaseurl = 'https://api.themoviedb.org/3/discover/movie?api_key=65c0b5c2c90e3d7e21bb3f1f0f0f8252'

const gettrendingvideos = axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key);
const getmoviesbygenreid = (id)=> axios.get(moviebygenrebaseurl+"&with_genres="+id)

export default{gettrendingvideos,getmoviesbygenreid}