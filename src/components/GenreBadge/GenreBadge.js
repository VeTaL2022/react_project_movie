import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {genreActions} from "../../redux";
import css from './GenreBadge.module.css';

export const GenreBadge = ({genre}) => {
    const {genres, loading, error} = useSelector(state => state.genreReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genreActions.getAll());
    }, [dispatch]);

    const genreOfMovie = [];

    const getNamesById = (value) => {
        if (genre.includes(value.id)) {
            genreOfMovie.push(value.name);
        }
    }
    genres.map(getNamesById);

    return (
        <div className={css.Badge}>
            {loading && <h2>Loading............</h2>}
            {error && <h2>Error</h2>}
            {genreOfMovie.map((genre, index) => <div key={index}><i>{genre}</i></div>)}
        </div>
    );
};