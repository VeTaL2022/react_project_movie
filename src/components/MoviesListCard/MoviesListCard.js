import {useLocation, useNavigate} from "react-router-dom";

import css from './MoviesListCard.module.css';

export const MoviesListCard = () => {
    const {state:movie} = useLocation();
    const {adult,backdrop_path,genre_ids,id,original_language,original_title,overview,
    popularity, poster_path, release_date, title, video, vote_average, vote_count} = movie;

    const navigate = useNavigate();

    return (
        <div className={css.Details}>
            <div>{adult}</div>
            <img src={'https://image.tmdb.org/t/p/w185'+ backdrop_path} alt={backdrop_path}/>
            <div>{JSON.stringify(genre_ids)}</div>
            <div>{id}</div>
            <div>{original_language}</div>
            <div>{original_title}</div>
            <div>{overview}</div>
            <div>{popularity}</div>
            <img src={"https://image.tmdb.org/t/p/w185"+poster_path} alt={poster_path}/>
            <div>{release_date}</div>
            <div>{title}</div>
            <div>{video}</div>
            <div>{vote_average}</div>
            <div>{vote_count}</div>
            <button onClick={() => navigate('/movies')}>Close</button>
        </div>
    )

}