import {useNavigate} from "react-router-dom";

import {StarsRating} from "../StarsRating/StarsRating";
import {GenreBadge} from "../GenreBadge/GenreBadge";
import css from './MovieInfo.module.css';

export const MovieInfo = ({movie}) => {
    const {title, overview, poster_path, vote_average, genre_ids} = movie;
    const navigate = useNavigate();

    return (
        <div className={css.Info}>
            <button onClick={() => navigate(`${movie.title}`, {state: {...movie}})}>
                <img src={'https://image.tmdb.org/t/p/w185' + poster_path} alt="img" width={'210px'}/>
            </button>
            <GenreBadge genre={genre_ids}/>

            <h3>{title}</h3>
            <details>
                <summary>Description</summary>
                <p>{overview}</p>
            </details>
            <div>{<StarsRating rate={vote_average}/>}</div>
        </div>
    )
};