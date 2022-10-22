import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";

import {movieActions} from "../../redux";
import {MovieInfo} from "../MovieInfo/MovieInfo";
import css from './SearchMovie.module.css';

export const SearchMovie = () => {
    const {register, handleSubmit, reset} = useForm();

    const {movieName} = useSelector(state => state.movieReducer);

    const dispatch = useDispatch();

    const submit = ({film}) => {
        dispatch(movieActions.getMovieByName({name: film}));
        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(submit)} className={css.Form}>
                <input type="text" {...register('film')}/>
                <button>Search</button>
            </form>
            <div className={css.Flex}>
                {movieName.map(movie => <MovieInfo movie={movie} key={movie.id}/>)}
            </div>
        </div>
    )
}

// import {movieService} from "../../services";
// movieService.getMovieByName(film).then(({data}) => console.log(data.results))
