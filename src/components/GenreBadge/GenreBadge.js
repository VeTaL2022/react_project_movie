import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {genreActions} from "../../redux";
import css from './GenreBadge.module.css';

export const GenreBadge = ({genre}) => {
    const {genres} = useSelector(state => state.genreReducer);

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
            {genreOfMovie.map((genre, index) => <div key={index}><i>{genre}</i></div>)}
        </div>
    )

}