import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

import {MovieInfo} from "../MovieInfo/MovieInfo";
import {movieActions} from "../../redux";
import css from './MovieList.module.css';

export const MovieList = () => {
    const dispatch = useDispatch();

    const {movie, loading, error} = useSelector(state => state.movieReducer);
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
                <button disabled={query.get('page') === '1'} onClick={prevPage}>Previous</button>
                <button disabled={query.get('page') === '500'} onClick={nextPage}>Next</button>
            </div>

            <div className={css.Flex}>
                {loading && <h2>Loading............</h2>}
                {error && <h2>Error</h2>}
                {results?.map((movie, index) => <MovieInfo movie={movie} key={index}/>)}
            </div>
        </div>
    )

}