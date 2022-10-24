import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";

import {MovieInfo} from "../MovieInfo/MovieInfo";
import {movieService} from "../../services";
import css from './GenresMovie.module.css';
import {genreActions} from "../../redux";

export const GenresMovie = () => {
    const {register, handleSubmit} = useForm({defaultValues: {id: 1}});

    const dispatch = useDispatch();
    const {genres} = useSelector(state => state.genreReducer);

    const [genre, setGenre] = useState(null);

    useEffect(() => {
        dispatch(genreActions.getAll());
    }, [dispatch]);

    const getMoviesByGenre = async ({id}) => {
        const {data} = await movieService.getAll();
        const {results} = data;
        const genreById = results.filter(value => value["genre_ids"].includes(+id));
        setGenre(genreById);
    }

    return (
        <div className={css.Genre}>
            <form onChange={handleSubmit(getMoviesByGenre)}>
                <select {...register('id')}>
                    {genres.map(genre => (
                        <option key={genre.id} value={genre.id}>{genre.name}</option>
                    ))}
                </select>
            </form>
            <div className={css.Flex}>
                {genre && genre.map(gen => <MovieInfo movie={gen} key={gen.id}/>)}
            </div>
        </div>
    )
}