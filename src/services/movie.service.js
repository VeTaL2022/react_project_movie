import {axiosService} from "./axios.service";
import {urls} from "../configs";

export const movieService = {
    getAll: (page = 1) => axiosService.get(urls.movies, {params: {page}}),
    getMovieByName: (name) => axiosService.get(`${urls.search}/movie?query=${name}`),
    getMoviesByGenre: (genreId) => axiosService.get(`${urls.movies}?&with_genres=${genreId}`)
}