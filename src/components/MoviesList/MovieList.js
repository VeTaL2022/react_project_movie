import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

import {MovieInfo} from "../MovieInfo/MovieInfo";
import {movieActions} from "../../redux";
import css from './MovieList.module.css';

export const MovieList = () => {
    const dispatch = useDispatch();

    const {movie, page} = useSelector(state => state.movieReducer);
    const {results} = movie;

    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(movieActions.getAll({page: query.get('page')}))
    }, [dispatch, query]);

    const prevPage = () => {
        setQuery(value => ({page: value.get('page') - 1}));
    }

    const nextPage = () => {
        setQuery(value => ({page: +value.get('page') + 1}))
    }

    return (
        <div>
            <div className={css.Button}>
                <button disabled={!page} onClick={prevPage}>Previous</button>
                <button disabled={!page} onClick={nextPage}>Next</button>
            </div>
            <div className={css.Flex}>
                {results?.map((movie, index) => <MovieInfo movie={movie} key={index}/>)}
            </div>
        </div>
    )

}