import {useLocation, useNavigate} from "react-router-dom";

import css from './MoviesListCard.module.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {genreActions} from "../../redux";

export const MoviesListCard = () => {
    const {state: movie} = useLocation();
    const {
        adult, backdrop_path, genre_ids, id, original_language, original_title, overview,
        popularity, poster_path, release_date, title, vote_average, vote_count
    } = movie;

    const navigate = useNavigate();

    const {genres} = useSelector(state => state.genreReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genreActions.getAll());
    }, [dispatch]);

    const genreOfMovie = [];

    const getNameById = (value) => {
        if (genre_ids.includes(value.id)) {
            genreOfMovie.push(value.name);
        }
    }
    genres.map(getNameById);

    return (
        <div className={css.Details}>
            <button onClick={() => navigate(-1)}>Close</button>
            <div>
                <div className={css.Title}>{title}</div>
                <div className={css.Vote}>
                    <div className={css.VoteAvg}>{vote_average}</div>
                    <div className={css.VoteCount}>
                        <ins>{vote_count}</ins>
                    </div>
                </div>
            </div>
            <div className={css.Main}>
                <img src={"https://image.tmdb.org/t/p/w185" + poster_path} alt={poster_path}/>
                <div className={css.Info}>
                    <p>Genres: {genreOfMovie.map((gen, index) => <span key={index}><ins>{gen}</ins> </span>)}</p>
                    <p>Original-Title: {original_title}</p>
                    <p>Original-Language: {original_language}</p>
                    <p>Title id: {id}</p>
                    <p>Adult: {JSON.stringify(adult)}</p>
                    <p>Popularity: {popularity}</p>
                    <p>Release-Date: {release_date}</p>
                </div>
            </div>
            <div className={css.Text}><i>{overview}</i></div>
            <img src={'https://image.tmdb.org/t/p/w185' + backdrop_path} alt={backdrop_path}/>
        </div>
    )

}