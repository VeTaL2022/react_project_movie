import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

import {movieService} from "../../services";
import css from './PosterPreview.module.css';

export const PosterPreview = () => {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        movieService.getAll().then(({data}) => setMovies(data.results));
    }, []);

    return (
        <div>
            <Carousel className={css.Carousel} autoPlay={true}>
                {movies.map(movie =>
                    <div key={movie.id}>

                        <button onClick={() => navigate(`/movies/${movie.title}`, {state: {...movie}})}>
                            <img src={"https://image.tmdb.org/t/p/w300/" + movie["poster_path"]}
                                 alt={movie.title}/>
                        </button>

                    </div>
                )}
            </Carousel>
        </div>
    );
};