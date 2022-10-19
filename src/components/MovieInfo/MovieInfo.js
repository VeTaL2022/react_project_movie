import css from './MovieInfo.module.css';
import {StarsRating} from "../StarsRating/StarsRating";
import {GenreBadge} from "../GenreBadge/GenreBadge";

export const MovieInfo = ({movie}) => {
    const {title, overview, poster_path, vote_average,genre_ids} = movie;

    return (
        <div className={css.Info}>
            <img src={'https://image.tmdb.org/t/p/w185' + poster_path} alt="img" width={'210px'}/>
            <h3>{title}</h3>
            <p>{overview}</p>
            <div>{<StarsRating rate={vote_average}/>}</div>
            {/*<p>{JSON.stringify(genre_ids)}</p>*/}
            {<GenreBadge genre_ids={genre_ids}/>}
        </div>
    )

}