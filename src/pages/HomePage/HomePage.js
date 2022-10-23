import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import {useEffect, useState} from "react";

import css from './HomePage.module.css';
import {movieService} from "../../services";
import {useNavigate} from "react-router-dom";

export const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        movieService.getAll().then(({data}) => setMovies(data.results))
    }, []);

    return (
        <div>
            <h2>Movie Word</h2>
            <Carousel className={css.Carousel}>
                {movies.map(movie =>
                    <div key={movie.id}>
                        <button onClick={() => navigate(`/movies`)}><img
                            src={"https://image.tmdb.org/t/p/w300/" + movie.backdrop_path}
                            alt={movie.title}/></button>
                    </div>
                )}
            </Carousel>
        </div>
    )
}