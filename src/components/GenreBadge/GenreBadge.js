import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";

import {genreActions} from "../../redux";
import {movieService} from "../../services";
import {MovieInfo} from "../MovieInfo/MovieInfo";
import css from './GenreBadge.module.css';

export const GenreBadge = () => {
    const {register, handleSubmit} = useForm({defaultValues: {id: 1}});

    const dispatch = useDispatch();
    const {genres} = useSelector(state => state.genreReducer);
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        dispatch(genreActions.getAll());
    }, [dispatch]);

    const ss = async ({id}) => {
        const {data} = await movieService.getAll();
        const {results} = data;
        const nes = results.filter(value => value.genre_ids.includes(+id));
        setGenre(nes);
    }
    return (
        <div className={css.Genre}>
            <form onChange={handleSubmit(ss)}>
                <select {...register('id')}>
                    {genres.map(genre => (
                        <option key={genre.id} value={genre.id}>{genre.name}</option>
                    ))}
                </select>
            </form>
            <div>
                {genre && genre.map(gen => <MovieInfo movie={gen} key={gen.id}/>)}
            </div>
        </div>
    )
}