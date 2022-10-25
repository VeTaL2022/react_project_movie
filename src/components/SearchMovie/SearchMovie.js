import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";

import {MovieInfo} from "../MovieInfo/MovieInfo";
import css from './SearchMovie.module.css';
import {movieActions} from "../../redux";

export const SearchMovie = () => {
    const {register, handleSubmit, reset} = useForm();

    const dispatch = useDispatch();

    const {movieName} = useSelector(state => state.movieReducer);

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
                {movieName?.map(movie => <MovieInfo movie={movie} key={movie.id}/>)}
            </div>
        </div>
    );
};