import {axiosService} from "./axios.service";
import {urls} from "../configs";

export const movieService = {
    getAll: () => axiosService.get(urls.movies)
}